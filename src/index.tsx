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
    // Plain MP4
    // src: '/03_caminandes_llamigos_1080p.mp4',
    // type: 'video/mp4'
    // HLS / TS
    // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
    // type: 'application/x-mpegURL'
    // HLS / MP4
    src: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
    type: 'application/x-mpegURL'
  }]
}

ReactDOM.render(
 // <Hello compiler="TypeScript" framework="React" />,
  <VideoPlayer { ...videoJsOptions } />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker(); 