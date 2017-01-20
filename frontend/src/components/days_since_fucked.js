'use strict';
import React, { Component } from 'react';

export class DaysSinceFucked extends Component {

  constructor(props){
    super(props);
    this.state = {daysSinceFucked: 0};
  }

  checkLastFucked(){
    if(localStorage.fucked === 'true'){
      localStorage.lastFucked = Date.now();
    }
    const lastFucked = localStorage.lastFucked;
    const msSinceFucked = Date.now() - lastFucked;
    // const daysSinceFucked = ~~( msSinceFucked / 1000 / 60 / 60 / 24 );
    // return daysSinceFucked;
    //for testing
    const secondsSinceFucked = ~~(msSinceFucked / 1000);
    this.setState({daysSinceFucked: secondsSinceFucked});
  }

  componentDidMount(){
    const checkClock = this.checkLastFucked.bind(this);
    this.interval = setInterval(checkClock, 1000);
  }

  componentWillUnmount(){
    let interval = this.interval;
    clearInterval(interval);
  }

  render(){
    return (
      <div className='days-since-fucked'>
        {`Days Since Fucked: ${this.state.daysSinceFucked}`}
      </div>
    )
  }
}
