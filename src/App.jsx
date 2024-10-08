/**
 * @author Raj Dusane <dusaneraj15@gmail.com>
 *  
 *  Copyright (c) 2024, Raj Dusane
 *  All rights reserved.
 * 
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.  
 * 
 */

import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Fade } from "react-awesome-reveal";
import leftFlower from './assets/img/rose.png';
import rightFlower from './assets/img/roseRight.png';
import midFlower from './assets/img/midFlower.png';
import leftBottom from './assets/img/lefBottom.png'
import rightBottom from './assets/img/rightBottom.png'
import heart from './assets/img/heart.webp';
import invitationCard from './assets/Invitation_Card/Invitation_Card.png';
import song from '/mp3/With-You-Ap-Dhillon.mp3';
import 'animate.css';
import './style.css';

const EngagementInvite = () => {

  const playAudio = () => {
    const audio = document.getElementById('my_audio');
    if (audio) {
      audio.play();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      playAudio();
    }, 1000);

    if (window.$) {
      $('.sakura-falling').sakura();
    }

    const countDownDate = new Date("Aug 27, 2030 10:30:00").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance/ (1000 * 60 * 60 *24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("time").innerHTML = `
        <div class='container'>
          <div class='days block'>${days}<br> <span class='size'> Days </span></div>
          <div class='hours block'>${hours}<br> <span class='size'> Hours </span></div>
          <div class='minutes block'>${minutes}<br> <span class='size'> Minutes </span></div>
          <div class='seconds block'>${seconds}<br><span class='size'> Seconds </span></div>
        </div>`;
      
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "congratulations!";
      }
    }, 1000);

    return () => clearInterval(x); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="sakura-falling" onClick={playAudio}>
      <Analytics />
      <div className="warning">The invitation is currently viewable only on mobile devices.</div>

      <img src={rightFlower} alt="image-top-right" className="top-right-decoration" />
      <img src={leftFlower} alt="image-top-left" className="top-left-decoration" />
      
      <div className='holder'>
        <section id="god">श्री गणेशाय नमः।</section>
        <div className="wrap">
          <div className="title">
            <Fade direction="down" triggerOnce={true} effect="bounce">
              <h1 id="Vaishnavi">Vaishnavi</h1>
            </Fade>
            <Fade triggerOnce={true}>
              <div className="heartContainer animate__heartBeat">
                <img className="heart" src={heart}/>
                <h2>&</h2>
              </div>
            </Fade>
            <Fade direction='up' triggerOnce={true}>
              <h1 id="Aditya">Aditya</h1>
              <div className="bottom-flowers">
                <img src={leftBottom} alt="" />
                <img src={rightBottom} alt="" />
              </div>
            </Fade>
            <Fade cascade damping={0.2} triggerOnce={true}>
              <h3>Are getting engaged</h3>
              <p> on <span className="date">27th August 2024, 10:30 AM</span>, At <span className="place">Ekadashi Banquet Hall</span>, Sangavi, Pune. </p>
              <img className='midFlower' src={midFlower}/>
            </Fade>
          </div>
        </div>

        <div id="time"></div>
        <p className="greet">भवन्ताम् च युष्माकं परिवारं च हार्दिकं स्वागतं।</p>

        <div className="actions">
          <a href="https://www.google.com/maps/place/Ekadashi+Pure+Veg+%26+Banquet+Hall/@18.5790497,73.8194351,1061m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2b9fa88974eed:0x20c3798ed8892c3e!8m2!3d18.5790497!4d73.8194351!16s%2Fg%2F11y5jydjmj?entry=ttu" target="_blank" rel="noopener noreferrer">
            <div className="venue">LOCATION</div>
          </a>
          {/* href='https://github.com/Raj-Dusane/Invitation/raw/main/src/assets/Invitation_Card/Invitation_Card.png' */}
          <a href={invitationCard} download="Invitation_Card.png">
            <div className="venue">DOWNLOAD INVITATION CARD</div>
          </a>
        </div>

        <p className="invite">
          {/* Can't wait to celebrate the auspicious moment of our family with you! <br /> */} 
          आमच्या कुटुंबाच्या या खास क्षणाचा आनंद तुमच्यासोबत साजरा करण्यासाठी आम्ही खूपच उत्सुक आहोत! आपल्यासोबत हा सोहळा आणखी खास होईल.<br/>
        </p>

        <div className="music">
          <audio src={song} id="my_audio" loop="loop"></audio> 
        </div>

        <p className="happiness"> Your presence is requested! <br />
        <cite className="cite"> -- Kharote Family -- </cite>
          <div className="links">
            <a href="https://www.linkedin.com/in/rajdusane/" target="_blank"> Copyright <span style={{fontSize:'5.5px'}}>&#169;</span> 2024 Raj Dusane <br/> All rights reserved. [Licensed: BSD-4-Clause]</a> 
          </div>
        </p>
      </div>
    </div>
  );
};

export default EngagementInvite;
