'use strict';

class App extends React.Component {
  constructor(props){
    super(props);
    //initialize API calls
    this.getDashboardData = new APICall('getDashboardData', this._onDataChange.bind(this));
    this.getDashboardState = new APICall('getDashboardState', this._onStateChange.bind(this));
    this.state = {
      dashboardData: null,
      dashboardState: { fucked: false, last_fucked: Date(), goals: '' }
    };
  }

  _onStateChange( newDashboardState ){
    this.setState({ dashboardState: newDashboardState });
  }

  _onDataChange( newDashboardData ){
    this.setState({ dashboardData: newDashboardData });
  }

  componentDidMount(){
    this.getDashboardData.send();
    this.getDashboardState.send();
    let self = this;
    this.interval = setInterval( function(){
      self.getDashboardData.send();
    }, 600000 );
  }

  componentWillUnmount(){
    interval = this.interval;
    clearInterval(interval);
  }

  render(){
    let dashData = this.state.dashboardData;
    let dashState = this.state.dashboardState;
    if(!dashData){
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
          <DaysSinceFucked />
          <FuckedOrNot fucked={dashState.fucked} lastFucked={dashState.last_fucked} />
        </div>
      </div>
    )
  }
}
