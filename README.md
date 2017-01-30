###API###

Api calls are handled on the frontend in /app/assets/javascripts/api_calls.js.es6.
APICall Class checks all API responses against a template with the
proper format and throws an error and prints the json object if it is not
properly formatted.  See line 41.  The error is caught in runFormatCheck on line 66
and the data is passed to the app.  JSON Format errors will be printed to the
console as 'API RESPONSE ERROR'

###GOALS DISPLAY###
To add or remove a goal just add the text to the object on line 9 of /app/assets/javascripts/react_components/goals.js.jsx
```javascript
const goalText = [
  '$250k CMRR',
  'PubNet by Q2',
  'ML correlations',
  '$30k/month ad profit',
  '50% rev not Zeal',
  '10/10 in Google'
];
```
