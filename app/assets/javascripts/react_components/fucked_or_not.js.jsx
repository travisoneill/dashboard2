'use strict';

const FuckedOrNot = ({ fucked, lastFucked }) => {

  const persistFuckedState = (fuckedState) => {
    let postData = { dashboardState: {fucked: fuckedState} };
    if(fuckedState){
      postData.dashboardState.last_fucked = Date.now();
    }
    return new APICall('setDashboardState', () => {}, postData);
  }

  const toggle = (event) => {
    const colors = ['green', 'red'];
    let classes = event.target.className.split(' ');
    let color = classes[1];
    let idx = colors.indexOf(color);
    let newIdx = (idx + 1) % colors.length;
    let newColor = colors[newIdx];
    classes[1] = newColor;
    event.target.className = classes.join(' ');

    let text = newColor === 'red' ? 'Fucked' : 'Not Fucked';
    event.target.innerHTML = text;

    let newFuckedState = event.target.innerHTML === 'Fucked';
    localStorage.fucked = newFuckedState;
    persistFuckedState(newFuckedState).send();
  }

  // initialize text and color based on fucked status
  let initialText = fucked ? 'Fucked' : 'Not Fucked';
  let initialColor = fucked ? 'red' : 'green';
  //use local storage to keep fucked clock up to date
  localStorage.fucked = fucked;
  localStorage.lastFucked = lastFucked;

  return (
    <div className={`fucked-or-not ${initialColor}`} onClick={toggle}>
      {initialText}
    </div>
  )
}
