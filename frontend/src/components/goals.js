'use strict';
import React from 'react';

export const Goals = () => {
  const cycle = (event) => {
    const colors = ['green', 'yellow', 'red'];
    let classes = event.target.className.split(' ');
    let color = classes[1];
    let idx = colors.indexOf(color);
    let newIdx = (idx + 1) % colors.length;
    classes[1] = colors[newIdx];
    event.target.className = classes.join(' ');
  }
  return (
    <div className='goals-container'>
      <ol className='goals-list'>
        <li className='goal red bold' onClick={cycle}>$250k CMRR</li>
        <li className='goal red' onClick={cycle}>PubNet by Q2</li>
        <li className='goal red' onClick={cycle}>ML correlations </li>
        <li className='goal red' onClick={cycle}>$30k/month ad profit</li>
        <li className='goal red' onClick={cycle}>50% rev not Zeal</li>
        <li className='goal red' onClick={cycle}>10/10 in Google</li>
      </ol>
    </div>
  )
}
