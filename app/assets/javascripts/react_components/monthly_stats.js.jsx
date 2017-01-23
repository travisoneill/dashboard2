'use strict';

class MonthlyStats extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newCMRR: { prev: 0, curr: 0 },
      acctUpgrades: { prev: 0, curr: 0 },
      oppsCreated: { prev: 0, curr: 0, amt: 0 }
    }
  }

  _onDataChange({newCMRR, acctUpgrades, oppsCreated}){
    this.setState({newCMRR: newCMRR, acctUpgrades: acctUpgrades, oppsCreated: oppsCreated});
  }

  getData(){
    const _updateData = this._onDataChange.bind(this);
    getCMRRData(_updateData);
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    const CMRR = this.state.newCMRR;
    const ACCT = this.state.acctUpgrades;
    const OPPS = this.state.oppsCreated;
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
