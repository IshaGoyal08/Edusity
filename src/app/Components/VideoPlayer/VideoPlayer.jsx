import React, { useRef } from 'react'

const VideoPlayer = ({playVideo,setplayVideo}) => {
  const player=useRef(null)

  const closevideo=(e)=>{
     
if(e.target===player.current){
  setplayVideo(false)
}

  }

  return (
    <div ref={player} className={`fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex items-center justify-center ${playVideo?'':'hidden'}`} onClick={closevideo}>
<video className='w-[90%] max-w-[900px] h-auto border-2 border-white' src="./video.mp4" autoPlay muted controls></video>


    </div>
  )
}

export default VideoPlayer