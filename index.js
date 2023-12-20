require('dotenv').config()
const sdk = require('api')('@bamboohr/v1#bcwv331mzax2b4')

sdk.auth(process.env.BAMBOO_USER, process.BAMBOO_PASS)
sdk.requestCustomReport({
    filters: {
        lastChange: {
            includeNull: 'Yes'
        }
    },
    fields: ['displayName','workEmail','employeeNumber','jobTitle','supervisor','supervisorEmail']
}, {
    format: 'JSON',
    onlyCurrent: 'true',
    companyDomain: process.env.DOMAIN
})
.then(({data})=> console.log(data))
.cath(err=>console.error(err));