class Dashboard < ActiveRecord::Base

  def self.cmrr_data
    DEMO_DATA[:cmrr_data]
  end

  def self.recent_keywords
    DEMO_DATA[:recent_keywords]
  end

  def self.cash_flow
    DEMO_DATA[:cash_flow]
  end

  def self.chart_data
    DEMO_DATA[:chart_data]
  end

  DEMO_DATA = {
    cmrr_data: {
      newCMRR: { prev: 6215, curr: 1700 },
      acctUpgrades: { prev: 0, curr: 0 },
      oppsCreated: { prev: 11, curr: 9, amt: 11000 }
    },
    recent_keywords: [
      {id: 1, keyword: 'client', searches: 101, awcpc: 13.37, _10V: 100000 },
      {id: 2, keyword: 'success', searches: 342, awcpc: 13.45, _10V: 20000 },
      {id: 3, keyword: 'speed', searches: 923, awcpc: 34.37, _10V: 50000 },
      {id: 4, keyword: 'simplicity', searches: 1002, awcpc: 155.37, _10V: 30000 }
    ],
    cash_flow: {
      weekly: 26840,
      monthly: 74416
    },
    chart_data: [0,1,2,3,4,3,2,5,6,3,4,5,6,7,2,0,3,2,1,2,3,5,8,4,2,5,7,9,11,13]
  }

end
