# HOW TO USE IN SANDBOX MODE
=================================

1. Login to AWS console --> SES dashboard.
2. In SES dashboard, create identity and verify two email address for sending and receiving email. We need to verify reciever email as well in Sandbox mode.
3. Get your AWS_ACCESS_KEY_ID and AWS_SECRET_KEY from the AWS account security credentials.
4. Clone the repository with ssh - `git clone git@github.com:RtjShreyD/node-ses-test.git`.
5. Inside the dir **node-ses-test/** run command - `npm i`.
6. Finally run - `node main.js`.

==================================

# HOW TO USE IN PROD
==================================

- In SES Console, go to ‘Sending Statistics’ on the menu on the left.
- You’ll see you have a Sandbox account with an info-box mentioning the same. Click on “Edit your account details”.
- Fill out the details required, your use case, etc.
- Once you fill in all the details, submit your application for review, wait for a few hours for the team to respond and approve your request, and you are good to go.
- But wait! No hurries! We know we got the approval, but that doesn’t mean we can use this for any kind of email we want to send.
- SES has a dashboard called, “Reputation Dashboard”, which keeps track of all the stats related to your email delivery and complaints. 
- Do take care of it and avoid generating any spam.

