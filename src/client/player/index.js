// import client side soundworks and player experience
import * as soundworks from 'soundworks/client';
import PlayerExperience from './PlayerExperience.js';

// list of files to load (passed to the experience)
const files = [
  'sounds/sound-welcome.mp3',
  'sounds/sound-others.mp3'
];

// launch application when document is fully loaded
window.addEventListener('load', () => {
  // configuration received from the server through the `index.html`
  // @see {~/src/server/index.js}
  // @see {~/html/default.ejs}
  const { appName, clientType, socketIO, assetsDomain }  = window.soundworksConfig;
  // initialize the 'player' client
  soundworks.client.init(clientType, { appName, socketIO });

  // create client side (player) experience
  const experience = new PlayerExperience(assetsDomain, files);

  // start the client
  soundworks.client.start();
});
