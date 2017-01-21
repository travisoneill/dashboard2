'use strict';

const FuckedOrNot = () => {
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

    localStorage.fucked = text === 'Fucked';
  }

  return (
    <div className='fucked-or-not green' onClick={toggle}>
      Not Fucked
    </div>
  )
}
