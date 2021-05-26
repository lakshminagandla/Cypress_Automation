
const Excel = require('exceljs');

async function exTest() {

    const testFolder = './cypress/results/NotepadOutput/';
    const fs = require('fs');
    const workbook = new Excel.Workbook();

    fs.readdirSync(testFolder).forEach(file => {
        console.log(file);

        var text = fs.readFileSync(testFolder + file).toString('utf-8');
        var textByLine = text.split("\n")
        var stepsLenght = parseInt(textByLine.length);
        console.log(textByLine.length);

        const worksheet = workbook.addWorksheet(textByLine[0]);

        worksheet.columns = [
            { header: 'Test Step #', key: 'stepNo', width: 10 },
            { header: 'Test Step Description', key: 'stepDescription', width: 32 },
            { header: 'Status', key: 'stepStatus', width: 15 }
        ];

        // worksheet.addRow({ stepNo: textByLine[i].split(".")[0], stepDescription: textByLine[i].split(".")[1], stepStatus: textByLine[i].split(".")[2] });

        var i;
        for (i = 2; i < stepsLenght; i++) {
            worksheet.addRow({ stepNo: textByLine[i].split(".")[0], stepDescription: textByLine[i].split(".")[1], stepStatus: textByLine[i].split(".")[2] });
        }
    });

    // save under export.xlsx
    await workbook.xlsx.writeFile('./ExcelTestReport.xlsx');
    console.log("File is written");
};

exTest();