FROM cypress/included:7.4.0

WORKDIR /app

COPY package.json package.json
RUN npx cypress install --force
RUN npm install
RUN npm update

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN node_modules/.bin/cypress run --spec cypress/integration/vaccinations_poc.js --browser chrome