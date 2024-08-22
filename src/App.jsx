import React, { useEffect } from 'react';
import leftFlower from './assets/img/pinkFlower_left.png';
import rightFlower from './assets/img/pinkFlower_right.png';
import midFlower from './assets/img/midFlower.png';
import GitHub from './assets/img/github.png';
import song from './assets/mp3/Kudmayi.mp3';
import './style.css';

const EngagementInvite = () => {

  const playAudio = () => {
    const audio = document.getElementById('my_audio');
    if (audio) {
      audio.play();
    }
  };

  useEffect(() => {
    playAudio();
    if (window.$) {
      $('.sakura-falling').sakura();
    }
  });

  return (
    <div className="sakura-falling">
      <img src={rightFlower} alt="image-top-right" className="top-right-decoration" />
      <img src={leftFlower} alt="image-top-left" className="top-left-decoration" />
      
      <div className='holder'>
        <section id="god">श्री गणेशाय नमः।</section>

        <div className="wrap">
          <div className="title">
            <h1 id="Vaishnavi">Vaishnavi</h1>
            <h2>&</h2>
            <h1 id="Aditya">Aditya</h1>
            <h3>Are getting engaged</h3>
            <p> on <span className="date">27th August 2024, 10:30 AM</span>, At <span className="place">Ekadashi Banquet Hall</span>, Sangavi, Pune. </p>
            <img src={midFlower} alt="" srcset="" />
          </div>
        </div>

        <div id="time"></div>
        <p className="greet">भवन्ताम् च युष्माकं परिवारं च हार्दिकं स्वागतं।</p>

        <div className="actions">
          <a href="https://www.google.com/maps/place/Ekadashi+Pure+Veg+%26+Banquet+Hall/@18.5790497,73.8194351,1061m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2b9fa88974eed:0x20c3798ed8892c3e!8m2!3d18.5790497!4d73.8194351!16s%2Fg%2F11y5jydjmj?entry=ttu" target="_blank" rel="noopener noreferrer">
            <div className="venue">LOCATION</div>
          </a>
          <a href="https://drive.google.com/file/d/1QRiPq9grvYvG2aQGUR3xvrtBSvF2RH4F/view?usp=drive_link" target="_blank" download="Invitation | 27 Aug | Hope to see you there!">
            <div className="venue">DOWNLOAD INVITATION CARD</div>
          </a>
        </div>

        <p className="footer">
          {/* Can't wait to celebrate the auspicious moment of our family with you! <br /> */} 
          आमच्या कुटुंबाच्या या खास क्षणाचा आनंद तुमच्यासोबत साजरा करण्यासाठी आम्ही खूपच उत्सुक आहोत! आपल्यासोबत हा सोहळा आणखी खास होईल.<br/>
        </p>

        <div className="music">
          <audio src={song} id="my_audio" loop="loop"></audio> 
        </div>

        <p className="happiness"> Your presence is requested! <br />
          <a href="https://github.com/raj-dusane" target="_blank" rel="noopener noreferrer" className="GitHub">
          <a href="https://www.linkedin.com/in/rajdusane/" target="_blank"> &#169; Raj Dusane</a> <img src={GitHub} alt="" /> </a>
        </p>
      </div>
    </div>
  );
};

export default EngagementInvite;
