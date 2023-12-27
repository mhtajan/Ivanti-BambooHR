const path = require('path')
require('dotenv').config(
  {path: path.join(__dirname, '.env')}
)
const axios = require('axios').default;
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const token = `${process.env.BAMBOO_USER}:${process.env.BAMBOO_PASS}`;
const encodedToken = Buffer.from(token).toString('base64');
const body = JSON.stringify({filters: {lastChanged: {includeNull: 'YES'}}, fields: ['displayName','workEmail','employeeNumber','workPhone','jobTitle','supervisor','supervisorEmail']})

module.exports = function(){
  axios({
    method: 'POST',
    url: `https://api.bamboohr.com/api/gateway.php/${process.env.DOMAIN}/v1/reports/custom?format=JSON`,
    headers: { 'Authorization': 'Basic ' + encodedToken, 'Content-Type': 'application/json' },  
    data: body
  })
    .then(function(response) {
      return response.data
    }).catch(function(error) {
        console.error(error)
    });
}
const myFormat = printf(({ message, timestamp }) => {
  return `${timestamp}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console(),
  new transports.File({
    filename: 'app.log',
    level: 'info'
  }),
  new transports.File({
    filename: 'errors.log',
    level: 'error'
  })
  ]
});