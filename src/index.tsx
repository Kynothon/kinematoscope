import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import { Hello } from "./components/Hello";
import { VideoPlayer} from "./components/Player";

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: '/03_caminandes_llamigos_1080p.mp4',
    type: 'video/mp4'
  }]
}

ReactDOM.render(
 // <Hello compiler="TypeScript" framework="React" />,
  <VideoPlayer { ...videoJsOptions } />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker(); 