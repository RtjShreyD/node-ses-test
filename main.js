const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.SES_REGION,
};

AWS.config.update(SES_CONFIG);

let email = process.env.TO_EMAIL;
let fromEmail = process.env.FROM_EMAIL;
let name = process.env.NAME;
let otp = process.env.OTP;

let params = {
    Destination: {
        /* required */
        ToAddresses: [
            email,
            /* more items */
        ]
    },
    Message: {
        /* required */
        Body: {
            /* required */
            Html: {
                Charset: "UTF-8",
                Data: `<h3>Hi ${name}!</h3><br/>
         <p>Your OTP for Something Something Service Hub is:<em> ${otp}</em></p><br/>
         
         <p>Regards,<br/>
         Something Something Service Hub Team</p>`
            },
            Text: {
                Charset: "UTF-8",
                Data: `Hi  ${name}! 
         Your Login OTP is ${otp}`
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: `${otp} is the  OTP for Something Something Service Hub!`
        }
    },
    Source: fromEmail,
    /* required */
    ReplyToAddresses: [
        fromEmail,
        /* more items */
    ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({
    apiVersion: '2010-12-01'
}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
    function (data) {
        console.log(data.MessageId);
    }).catch(
    function (err) {
        console.error(err, err.stack);
    });

// }