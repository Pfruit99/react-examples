import React from 'react';

import ReactPlayer from 'react-player';
import '../styles/video_react.scss';

 


const NotFound = () => {
  
  return (
    <div className='contenedor'>

      <h1 className='title-error404'> 404 page not found......</h1>
      <p className='title-error404-pharse'>meanwhile watch this video :)</p>
      
      <ReactPlayer
        url='https://youtu.be/WCi2DLYE82A'
        width='854px'
        height= '480px'
        controls
        playing
        muted
        ClassName="react-player">
      </ReactPlayer>


    </div>
      
  );
};

export default NotFound;