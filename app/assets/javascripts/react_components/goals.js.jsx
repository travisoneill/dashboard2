'use strict';

const colors = [
  'green',
  'yellow',
  'red'
];

const goalText = [
  '$250k CMRR',
  'PubNet by Q2',
  'ML correlations',
  '$30k/month ad profit',
  '50% rev not Zeal',
  '10/10 in Google'
];

const Goals = ({ data }) => {

  if(!data){ return <div />; }

  const colorIdx = data.split('').map( n => colors[parseInt(n)] );

  const cycle = (event) => {
    let classes = event.target.className.split(' ');
    let color = classes[1];
    let idx = colors.indexOf(color);
    let newIdx = (idx + 1) % colors.length;
    classes[1] = colors[newIdx];
    event.target.className = classes.join(' ');
    persist(event.target.id, newIdx);
  };

  const setDashboardState = (data) => {
    let postData = { dashboardState: {goals: data} }
    return new APICall('setDashboardState', () => {}, postData );
  };

  // persist goal state
  const persist = (id, idx) => {
    let newGoalState = data.split('').map( n => parseInt(n) );
    newGoalState[id] = idx;
    newGoalState = newGoalState.join('');
    data = newGoalState;
    setDashboardState(newGoalState).send();
  };

  const goalList = goalText.map( (goal , idx) => {
    return <GoalItem color={colorIdx[idx]} text={goal} bold={idx === 0} key={idx} callback={cycle} idx={idx} />;
  });

  return (
    <div className='goals-container'>
      <ol className='goals-list'>
        {goalList}
      </ol>
    </div>
  )
}

const GoalItem  = ({ color, text, bold, idx, callback }) => {
  return <li className={`goal ${color} ${bold ? 'bold' : ''}`} onClick={callback} id={idx}>{text}</li>
}
