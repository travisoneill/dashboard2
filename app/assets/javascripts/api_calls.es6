class APICall {
  constructor(action, callback, postData){
    this.callback = callback;
    this.data = postData;
    switch(action){
      case 'getDashboardData':
        this.action = this.getDashboardData;
        this.url = '/dashboard/data';
        this.method = 'GET';
        this.format = DATA_FORMAT
        break;
      case 'getDashboardState':
        this.getDashboardState;
        this.url = '/dashboard/state';
        this.method = 'GET';
        this.format = STATE_FORMAT
        break;
      case 'setDashboardState':
        this.setDashboardState;
        this.url = '/dashboard/state';
        this.method = 'POST';
        this.format = STATE_FORMAT
        break;
    }
  }

  send(){
    let format = this.format;
    let runFormatCheck = this.runFormatCheck.bind(this);
    $.ajax({
      url: this.url,
      method: this.method,
      data: this.data,
      success(res){
        console.log(res);
        runFormatCheck(res, format);
      }
    });
  }

  formatCheck(obj, template, verbose){
    console.log(verbose);
    if(verbose){
      console.log('--------------------------');
      console.log('TEST OBJECT:');
      console.log(obj);
      console.log('CORRECT FORMAT:');
      console.log(template);
    }
    if(typeof template !== typeof obj){
      throw `ERROR: object contains incorrect data type`;
    } else if (typeof template === 'object') {
      for(key in template){
        if(key in obj){
          if(verbose){
            console.log('---PASS---');
          }
          check( obj[key], template[key], verbose)
        } else {
          throw `key ${key} missing from json`
        }
      }
    }
  }

  runFormatCheck(obj, template){
    try {
      this.formatCheck(obj, template);
    } catch(e) {
      this.formatCheck(obj, template, true);
    } finally {
      this.callback(obj);
    }
  }

}

const DATA_FORMAT = {
  cmrr_data: {
    newCMRR: { prev: 0, curr: 0 },
    acctUpgrades: { prev: 0, curr: 0 },
    oppsCreated: { prev: 0, curr: 0, amt: 0 }
  },
  recent_keywords: [
    {id: 0, keyword: 'string', searches: 0, awcpc: 0, _10V: 0 },
    {id: 0, keyword: 'string', searches: 0, awcpc: 0, _10V: 0 },
    {id: 0, keyword: 'string', searches: 0, awcpc: 0, _10V: 0 },
    {id: 0, keyword: 'string', searches: 0, awcpc: 0, _10V: 0 }
  ],
  cash_flow: {
    weekly: 26840,
    monthly: 74416
  },
  chart_data: [0,1,2,3,4,3,2,5,6,3,4,5,6,7,2,0,3,2,1,2,3,5,8,4,2,5,7,9,11,13]
};

const STATE_FORMAT = {};
//
// const getDashboardData = () => {
//   $.ajax({
//     url: '/dashboard/cmrrdata',
//     method: 'GET',
//     success(res){
//       callback(res);
//     }
//   });
// }
//
// const getCMRRData = (callback) => {
//   $.ajax({
//     url: '/dashboard/cmrrdata',
//     method: 'GET',
//     success(res){
//       callback(res);
//     }
//   });
// }
//
// const getRecentKeywords = (callback) => {
//   $.ajax({
//     url: '/dashboard/recentkeywords',
//     method: 'GET',
//     success(res){
//       callback(res);
//     }
//   });
// }
//
// const getCashFlow = (callback) => {
//   $.ajax({
//     url: '/dashboard/cashflow',
//     method: 'GET',
//     success(res){
//       callback(res);
//     }
//   });
// }
//
// const getChartData = (callback) => {
//   $.ajax({
//     url: '/dashboard/chartdata',
//     method: 'GET',
//     success(res){
//       callback(res);
//     }
//   });
// }
//
// function g(text) {
//   string = '';
//   if(text){
//     return 'g' + string + text;
//   } else {
//     string += 'o';
//     return function(){
//
//     }
//   }
// }
