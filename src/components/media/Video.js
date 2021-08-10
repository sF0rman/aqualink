import React from 'react';
import ReactPlayer from 'react-player/vimeo';

const Video = ({ url, play, mute, loop }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer className="react-player" url={url} muted={mute ? mute : true} playing={play ? play : true} loop={loop ? loop : true} width='100%' height='100%' />
    </div>
  )
}

export default Video;