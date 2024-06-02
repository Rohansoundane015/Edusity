import React from 'react'
import './VideoPlayer.css'
import vedio_Player from '../../assets/video_player.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    
      <div className= {`video-player ${playState?'':'hide'}`}>
        <video src={vedio_Player} autoPlay muted controls></video>
      </div>
    
  )
}

export default VideoPlayer
