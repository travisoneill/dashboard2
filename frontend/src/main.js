'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  // set days since fucked clock if not already set
  localStorage.lastFucked = localStorage.lastFucked || Date.now();
  let entryPoint = document.querySelector('#react-entry');
  ReactDOM.render( <App />, entryPoint );
})
