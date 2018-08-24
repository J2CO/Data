let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' || isFoggyNight === true) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms & Legs are getting harrier!');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet.');
} else {
  console.log('Invalid Moon Phase.');
}
