'use strict';

class CashFlow extends React.Component {
  constructor(props){
    super(props);
    this.state = { weekly: 0, monthly: 0 };
  }

  _onDataChange({ weekly, monthly }){
    this.setState({ weekly: weekly, monthly: monthly });
  }

  getData(){
    const _updateData = this._onDataChange.bind(this);
    setTimeout(function(){
      getCashFlow(_updateData);
    }, 500 );
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return (
      <div className='cash-flow-container'>
        <div className='cash-flow-item'>
          <p className='cf-number'>{dollarFormat(this.state.weekly)}</p>
          <p className='cf-title'>7 Day Cashflow</p>
        </div>
        <div className='cash-flow-item'>
          <p className='cf-number'>{dollarFormat(this.state.monthly)}</p>
          <p className='cf-title'>30 Day Cashflow</p>
        </div>
      </div>
    )
  }
}
