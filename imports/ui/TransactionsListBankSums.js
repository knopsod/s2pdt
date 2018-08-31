import React from 'react';
import numeral from 'numeral';

const transactionsListBankSums = (props) => {
  let bankBgColor = 0x000000;
  let bankName = 'Other Bank';

  switch (props.tran.bank_short_name) {
    case 'KBANK':
      bankBgColor = '#088A29';
      bankName = 'Kasikorn Bank';
      break;

    case 'SCB':
      bankBgColor = '#7a197a';
      bankName = 'Siam Commercial';
      break;

    case 'BAY':
      bankBgColor = '#FACC2E';
      bankName = 'Bank of Ayudhya';
      break;

    case 'GOV':
      bankBgColor = '#F5A9E1';
      bankName = 'Goverment Saving Bank';
      break;

    case 'TMB':
      bankBgColor = '#0174DF';
      bankName = 'TMB Bank';
      break;

    case 'KTB':
      bankBgColor = '#81DAF5';
      bankName = 'Krungthai Bank';
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
                <span style={{fontSize: '20px'}}>{ numeral(props.tran.sum).format('0,0') }</span> <small>Baht</small>
            </div>
        </div>
    </div>
  );
};

export default transactionsListBankSums;
