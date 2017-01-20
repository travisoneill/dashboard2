'use strict';
import React from 'react';
import { MissionStatement } from './mission_statement';
import { Targets } from './targets';
import { Goals } from './goals';
import { MonthlyStats } from './monthly_stats';
import { Chart } from './chart.js';
import { RecentKeywords } from './recent_keywords';
import { CashFlow } from './cash_flow';
import { FuckedOrNot } from './fucked_or_not';
import { DaysSinceFucked } from './days_since_fucked';


export const App = () => {
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
