# Shop2Pay

### Install

First you need install Node.js (version 8.x is recommended) and Meteor framework.

- [Node.js](https://nodejs.org/)
- [Meteor](https://www.meteor.com/)

Open you terminal to clone and go to your directory

```
git clone git@bitbucket.org:huckhuman/shop2pay_dev_test.git my_project_dir
cd my_project_dir
```

Install and run

```sh
npm install
npm start
```

You also can testing by

```sh
npm test
```

And open `http://localhost:3000/` in your browser.

### REST API Instructions
#### Client
Client use RESTful POST method to Shop2Pay endpoint
```
POST http://shop2pay-dev-test.herokuapp.com/api/v1/transactions
```
and send data
```
{
    client_url: "http://example.com",
    client_rest_api_endpoint: "https://example.com/api/v1/transactions", // optional data if not provide, use default data that set in Shop2Pay
    client_transaction_id: "abcd1234", // ref. internal id of client web
    bank_account: "John Doe",
    bank_no: "999-9-9999-9",
    bank_name: "kasikorn",
    bank_short_name: "KBANK", // ref. http://www.bangkokbank.com/download/SMART_Member_Banks_Eng_.pdf
    transfer_type: "ATM",
    amount: 2999,
    transferred_datetime: "2018-01-01 10:00:00",
    transfer_detail: "Some comment message from user",
    is_approved: "false"
}
```

#### Shop2Pay
Shop2Pay use RESTful POST method to client endpoint
```
POST http://example.com/api/v1/transactions
```
and send data
```
{
    client_url: "http://example.com",
    client_rest_api_endpoint: "https://example.com/api/v1/transactions", // optional data if not provide, use default data that set in Shop2Pay
    client_transaction_id: "abcd1234", // ref. internal id of client web
    bank_account: "John Doe",
    bank_no: "999-9-9999-9",
    bank_name: "kasikorn",
    bank_short_name: "KBANK", // ref. http://www.bangkokbank.com/download/SMART_Member_Banks_Eng_.pdf
    transfer_type: "ATM",
    amount: 2999,
    transferred_datetime: "2018-01-01 10:00:00",
    transfer_detail: "Some comment message from user",
    is_approved: "true",
    approved_datetime: "2018-01-01 11:00:00"
}
```
### Meteor Deployment
#### Heroku
- [Meteor Buildpack Horse](https://github.com/AdmitHub/meteor-buildpack-horse)
