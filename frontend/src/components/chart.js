'use strict';
import React, { Component } from 'react';
import { d3Chart } from '../d3_chart';
import { getChartData } from '../demo_data';

export class Chart extends Component {

  constructor(props){
    super(props);
    this.title = 'New Customers';
    this.data = [];
    this.idx = 0;
  }

  cycleChart(cycle){
    let dayIntervals = [30];
    this.idx = (this.idx + 1) % dayIntervals.length;
    let numDays = dayIntervals[this.idx];
    let chartData = this.data.slice(-numDays);
    d3Chart.update(this.chartContainer, chartData, this.title);
    if(!cycle){ clearInterval(this.interval); }
  }

  _onDataChange(newData){
    const chartContainer = document.querySelector('#chart-container');
    this.data = newData;
    // d3Chart.update(this.chartContainer, this.data, this.title);
    let cycle = this.cycleChart.bind(this);
    this.interval = setInterval(cycle, 1000);
  }

  getData(){
    const _updateData = this._onDataChange.bind(this);
    setTimeout(function(){
      getChartData(_updateData);
    }, 1000 );
  }

  componentDidMount(){
    this.chartContainer = document.querySelector('#chart-container');
    this.getData();
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
