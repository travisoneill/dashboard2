'use strict';

class MonthlyStats extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.data){ return <div/>; }
    const CMRR = this.props.data.newCMRR;
    const ACCT = this.props.data.acctUpgrades;
    const OPPS = this.props.data.oppsCreated;
    const month = Date().split(' ')[1];
    return (
      <div className='stat-list'>
        <div className='stat newCMRR'>
          <p className='total'>{dollarFormat(CMRR.curr)}</p>
          <p className='diff'>{dollarFormat(CMRR.curr - CMRR.prev)}</p>
          <p className='label'>{`New CMRR (${month})`}</p>
        </div>
        <div className='stat acctUpgrades'>
          <p className='total'>{ACCT.curr}</p>
          <p className='diff'>{ACCT.curr - ACCT.prev}</p>
          <p className='label'>{`Acct Upgrades (${month})`}</p>
        </div>
        <div className='stat oppsCreated'>
          <p className='total'>{OPPS.curr}</p>
          <p className='diff'>{`${OPPS.curr - OPPS.prev} | ${dollarFormat(OPPS.amt)} monthly`}</p>
          <p className='label'>{`Opps Created (${month})`}</p>
        </div>
      </div>
    )
  }
}
