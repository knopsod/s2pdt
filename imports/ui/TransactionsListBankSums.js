import React from 'react';

const transactionsListBankSums = (props) => {
  let bankBgColor = 0x000000;
  let bankName = 'ธนาคารอื่นๆ';

  switch (props.tran.bank_short_name) {
    case 'KBANK':
      bankBgColor = '#088A29';
      bankName = 'กสิกรไทย';
      break;

    case 'SCB':
      bankBgColor = '#7a197a';
      bankName = 'ไทยพาณิชย';
      break;

    case 'BAY':
      bankBgColor = '#FACC2E';
      bankName = 'กรุงศรีฯ';
      break;

    case 'GOV':
      bankBgColor = '#F5A9E1';
      bankName = 'ออมสิน';
      break;

    case 'TMB':
      bankBgColor = '#0174DF';
      bankName = 'ทหารไทย';
      break;

    case 'KTB':
      bankBgColor = '#81DAF5';
      bankName = 'กรุงไทย';
      break;

    default:

  }

  return (
    <div className="col-sm-3 col-xs-12">
        <div className="panel panel-default" style={{border: '0px'}}>
            <div className="panel-heading text-left"
              style={{background: bankBgColor, color: '#ffffff', border: '0px', borderRadius: '0px'}}>
                <strong>{bankName}</strong>
            </div>
            <div className="panel-body text-right"
              style={{background: bankBgColor, color: '#ffffff', padding: '0px 15px 10px 15px'}}>
                <span style={{fontSize: '20px'}}>0.00</span> <small>บาท</small>
            </div>
        </div>
    </div>
  );
};

export default transactionsListBankSums;
