const axios = require('axios').default;
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const token = `${process.env.BAMBOO_USER}:${process.env.BAMBOO_PASS}`;
const encodedToken = Buffer.from(token).toString('base64');

axios({
  method: 'get',
  url: `https://api.bamboohr.com/api/gateway.php/${process.env.DOMAIN}/v1/reports/1329?format=jso`,
  headers: { 'Authorization': 'Basic ' + encodedToken }
})
  .then(function(response) {
    let employees = response.data.employees
    employees.forEach((entry) => {
      //if(entry.division==null||entry.customCompanyCode==null
      //   ||entry.customGroupCode==null||entry.department==null){
      // logger.info(JSON.stringify(entry.fullName2,null,2))
      // }
      if(entry.jobTitle && entry.jobTitle.includes('Head')){
        return entry
      }
    }

      //logger.info(`${entry.id}-${entry.fullName2}`)
      //logger.info(JSON.stringify(employees,null,2))
    )
  });

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