const getCMRRData = (callback) => {
  $.ajax({
    url: '/dashboard/cmrrdata',
    method: 'GET',
    success(res){
      callback(res);
    }
  });
}

const getRecentKeywords = (callback) => {
  $.ajax({
    url: '/dashboard/recentkeywords',
    method: 'GET',
    success(res){
      callback(res);
    }
  });
}

const getCashFlow = (callback) => {
  $.ajax({
    url: '/dashboard/cashflow',
    method: 'GET',
    success(res){
      callback(res);
    }
  });
}

const getChartData = (callback) => {
  $.ajax({
    url: '/dashboard/chartdata',
    method: 'GET',
    success(res){
      callback(res);
    }
  });

}
