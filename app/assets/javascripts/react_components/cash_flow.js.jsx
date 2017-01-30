'use strict';

class CashFlow extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='cash-flow-container'>
        <div className='cash-flow-item'>
          <p className='cf-number'>{dollarFormat(this.props.data.weekly)}</p>
          <p className='cf-title'>7 Day Cashflow</p>
        </div>
        <div className='cash-flow-item'>
          <p className='cf-number'>{dollarFormat(this.props.data.monthly)}</p>
          <p className='cf-title'>30 Day Cashflow</p>
        </div>
      </div>
    )
  }
}
