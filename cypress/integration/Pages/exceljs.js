const Excel = require('exceljs');

async function exTest() {

    const testFolder = './cypress/results/NotepadOutput/';
    const fs = require('fs');
    const workbook = new Excel.Workbook();

    fs.readdirSync(testFolder).forEach(file => {
        console.log(file);

        var text = fs.readFileSync(testFolder + file).toString('utf-8');
        var textByLine = text.split("\n")
        var stepsLength = parseInt(textByLine.length);
        console.log(textByLine.length - 1);

        const worksheet = workbook.addWorksheet(textByLine[0]);

        worksheet.columns = [{
                header: 'Test Step #',
                key: 'stepNo',
                width: 10
            },
            {
                header: 'Test Step Description',
                key: 'stepDescription',
                width: 32
            },
            {
                header: 'Status',
                key: 'stepStatus',
                width: 15
            }
        ];

        var i;
        var calculatingStepsCount = 0;
        for (i = 2; i < stepsLength; i++) {
            worksheet.addRow({
                stepNo: textByLine[i].split(".")[0],
                stepDescription: textByLine[i].split(".")[1],
                stepStatus: textByLine[i].split(".")[2]
            });

            if (textByLine[i].split(".")[0] != '')
                calculatingStepsCount++;
        }

        if (calculatingStepsCount != parseInt(textByLine[1].split("::")[1])) {
            worksheet.addRow({
                stepDescription: "Script Failed at Step #" + (parseInt(calculatingStepsCount) + 1)
            }).font = {
                name: 'Calibri',
                'alignment': {
                    'vertical': 'top',
                    'horizontal': 'left'
                },
                'color': {
                    'argb': 'E70B0B'
                },
                family: 4,
                size: 15,
                underline: 'double',
                bold: true
            };
        }
    });

    // save under export.xlsx
    await workbook.xlsx.writeFile('./ExcelTestReport.xlsx');
    console.log("File is written");
};

exTest();