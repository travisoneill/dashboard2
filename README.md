###API###

Api calls are handled on the frontend in /app/assets/javascripts/api_calls.js.es6.
APICall Class checks all API responses against a template with the
proper format and throws an error and prints the json object if it is not
properly formatted.  See line 41.  The error is caught in runFormatCheck on line 66
and the data is passed to the app.  JSON Format errors will be printed to the
console as 'API RESPONSE ERROR'

###DB###
Dashboard state (goal and fucked status) stored in the dashboards table.
Schema:
```ruby
t.boolean  "fucked"
t.integer  "last_fucked"
t.string   "goals"
t.datetime "created_at",  null: false
t.datetime "updated_at",  null: false
```
Fucked clock time is stored as a utc integer. Goals state is stored as a
string of '0's, '1's, or '2's. There are more characters than goals to allow
easy changes in the number of goals on the dashboard.

###GOALS DISPLAY###
Click on goal to cycle goal status.  Changes are persisted.  
Add or remove a goal by adding the text to the object on line 9 of /app/assets/javascripts/react_components/goals.js.jsx
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

###FUCKED OR NOT FUCKED###
Click on the text to toggle fucked status.  Changes will be persisted to the database.
The Days since Fucked counter will be automatically reset if status is toggled to 'Fucked'
