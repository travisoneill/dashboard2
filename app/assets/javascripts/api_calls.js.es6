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
        runFormatCheck(res, format);
      }
    });
  }

  //checks format of JSON object against a template
  formatCheck(obj, template, verbose){
    if(verbose){
      console.log('--------------------------');
      console.log('TEST OBJECT:');
      console.log(obj);
      console.log('CORRECT FORMAT:');
      console.log(template);
    }
    if(typeof template !== typeof obj){
      throw `API RESPONSE ERROR: object contains incorrect data type`;
    } else if (typeof template === 'object') {
      for(var key in template){
        if(key in obj){
          if(verbose){
            console.log('---PASS---');
          }
          this.formatCheck( obj[key], template[key], verbose)
        } else {
          throw `API RESPONSE ERROR: key ${key} missing from json`
        }
      }
    }
  }

  //try catch on format check, shows errors if found, and passes to app regardless
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

//TEMPLATE FORMATS FOR JSON API RESPONSES
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
    weekly: 0,
    monthly: 0
  },
  chart_data: [0,1,2,3,4,3,2,5,6,3,4,5,6,7,2,0,3,2,1,2,3,5,8,4,2,5,7,9,11,13]
};

const STATE_FORMAT = {
  created_at: "string",
  fucked: true,
  goals: "string",
  id: 1,
  last_fucked: 1485735855,
  updated_at: "string"
};
