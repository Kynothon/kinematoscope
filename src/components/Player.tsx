import '!style-loader!css-loader!video.js/dist/video-js.css';

import * as React from "react";
import * as Videojs from "video.js"

export interface IVideoPlayerProps { autoplay: boolean, controls: boolean, sources: Array<{ src: string, type: string }> }

export class VideoPlayer extends React.Component<IVideoPlayerProps, {}> {
    private videoNode: any;
    private player: Videojs.Player;

    public componentDidMount() {
        // instantiate Video.js
        this.player = Videojs(this.videoNode, this.props, function onPlayerReady() {
      //      console.log('onPlayerReady', this)
        });
    }

    // destroy player on unmount
    public componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    public render() {
        return (
            <div>
                <div data-vjs-player="true">
                    <video ref={node => this.videoNode = node} className="video-js vjs-default-skin vjs-16-9 vjs-big-play-centered"/>
                </div>
            </div>
        )
    }
} 