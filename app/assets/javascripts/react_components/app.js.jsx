'use strict';

// const App = () => {
//   return (
//     <div className='app-container'>
//       <div className='column left'>
//         <MissionStatement />
//         <Targets />
//         <Goals />
//       </div>
//       <div className='column center'>
//         <MonthlyStats />
//         <Chart />
//         <RecentKeywords />
//         <CashFlow />
//       </div>
//       <div className='column right'>
//         <DaysSinceFucked />
//         <FuckedOrNot />
//       </div>
//     </div>
//   )
// }

// DEMO_DATA = {
//   cmrr_data: {
//     newCMRR: { prev: 6215, curr: 1700 },
//     acctUpgrades: { prev: 0, curr: 0 },
//     oppsCreated: { prev: 11, curr: 9, amt: 11000 }
//   },
//   recent_keywords: [
//     {id: 1, keyword: 'client', searches: 101, awcpc: 13.37, _10V: 100000 },
//     {id: 2, keyword: 'success', searches: 342, awcpc: 13.45, _10V: 20000 },
//     {id: 3, keyword: 'speed', searches: 923, awcpc: 34.37, _10V: 50000 },
//     {id: 4, keyword: 'simplicity', searches: 1002, awcpc: 155.37, _10V: 30000 }
//   ],
//   cash_flow: {
//     weekly: 26840,
//     monthly: 74416
//   },
//   chart_data: [0,1,2,3,4,3,2,5,6,3,4,5,6,7,2,0,3,2,1,2,3,5,8,4,2,5,7,9,11,13]
// }

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('app');
    this._onDataChange = this._onDataChange.bind(this);
    this._onStateChange = this._onStateChange.bind(this);
    this.state = {
      dashboardData: null,
      dashboardState: {fucked: false, lastFucked: Date() }
    };
  }

  _onStateChange({ newDashboardState }){
    this.setState({ dashboardState: newDashboardState });
  }

  _onDataChange({ newDashboardData }){
    this.setState({ dashboardData: newDashboardData });
  }

  getState(){
    const _updateState = this._onStateChange.bind(this);
    // getDashboardData(_updateState);
  }

  getData(){
    const _updateData = this._onDataChange.bind(this);
    // getDashboardData(_updateData);
  }

  componentDidMount(){
    console.log('mount');
    let getDashboardData = new APICall('getDashboardData', this._onDataChange);
    console.log('APICall instantiated');
    getDashboardData.send();
    // this.getState();
    // this.getData();
  }

  render(){
    console.log('sdffg');
    let dashData = this.state.dashboardData;
    let dashState = this.state.dashboardState;
    if(!dashData){
      console.log('nothing');
      return <div>NOTHING</div>;
    }
    return (
      <div className='app-container'>
        <div className='column left'>
          <MissionStatement />
          <Targets />
          <Goals data={dashState.goals} />
        </div>
        <div className='column center'>
          <MonthlyStats data={dashData.cmrr_data} />
          <Chart data={dashData.chart_data} />
          <RecentKeywords data={dashData.recent_keywords} />
          <CashFlow data={dashData.cash_flow} />
        </div>
        <div className='column right'>
          <DaysSinceFucked data={dashState.lastFucked} />
          <FuckedOrNot data={dashState.fucked} />
        </div>
      </div>
    )
  }
}
