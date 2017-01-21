const getCMRRData = (callback) => {
  const data = {
    newCMRR: { prev: 6215, curr: 1700 },
    acctUpgrades: { prev: 0, curr: 0 },
    oppsCreated: { prev: 11, curr: 9, amt: 11000 }
  }
  callback(data);
}

const getRecentKeywords = (callback) => {
  const data = [
    {id: 1, keyword: 'client', searches: 101, awcpc: 13.37, _10V: 100000 },
    {id: 2, keyword: 'success', searches: 342, awcpc: 13.45, _10V: 20000 },
    {id: 3, keyword: 'speed', searches: 923, awcpc: 34.37, _10V: 50000 },
    {id: 4, keyword: 'simplicity', searches: 1002, awcpc: 155.37, _10V: 30000 }
  ]
  callback(data);
}

const getCashFlow = (callback) => {
  const data = {
    weekly: 26840,
    monthly: 74416
  }
  callback(data);
}

const getChartData = (callback) => {
  const data = [0,1,2,3,4,3,2,5,6,3,4,5,6,7,2,0,3,2,1,2,3,5,8,4,2,5,7,9,11,13];
  callback(data);
}
