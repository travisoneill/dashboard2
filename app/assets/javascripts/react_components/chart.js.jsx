'use strict';

class Chart extends React.Component {

  constructor(props){
    super(props);
    this.title = 'New Customers';
    this.data = this.props.data;
    this.idx = 0;
  }

  // cycleChart(cycle){
  //   let dayIntervals = [30];
  //   this.idx = (this.idx + 1) % dayIntervals.length;
  //   let numDays = dayIntervals[this.idx];
  //   let chartData = this.data.slice(-numDays);
  //   d3Chart.update(this.chartContainer, chartData, this.title);
  //   if(!cycle){ clearInterval(this.interval); }
  // }
  //
  // _onDataChange(newData){
  //   const chartContainer = document.querySelector('#chart-container');
  //   this.data = newData;
  //   // d3Chart.update(this.chartContainer, this.data, this.title);
  //   let cycle = this.cycleChart.bind(this);
  //   this.interval = setInterval(cycle, 1000);
  // }
  //
  // getData(){
  //   const _updateData = this._onDataChange.bind(this);
  //   getChartData(_updateData);
  // }

  componentDidMount(){
    this.chartContainer = document.querySelector('#chart-container');
    d3Chart.update(this.chartContainer, this.props.data, this.title);

    // this.getData();
  }

  componentWillUnmount(){
    let interval = this.interval;
    if(interval){
      clearInterval(interval);
    }
    d3Chart.remove();
  }

  render(){
    return (
      <div id='chart-container' className='chart-container'></div>
    )
  }
}
