'use strict';

const App = () => {
  return (
    <div className='app-container'>
      <div className='column left'>
        <MissionStatement />
        <Targets />
        <Goals />
      </div>
      <div className='column center'>
        <MonthlyStats />
        <Chart />
        <RecentKeywords />
        <CashFlow />
      </div>
      <div className='column right'>
        <DaysSinceFucked />
        <FuckedOrNot />
      </div>
    </div>
  )
}
