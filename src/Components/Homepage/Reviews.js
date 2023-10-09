import React, { Component } from 'react';
import ReviewCard from '../ReviewCard';
import wendy from '../../Assets/Review/Wendy.jpg';
import renee from '../../Assets/Review/Renee.jpg';
import Martha from '../../Assets/Review/Martha.jpg';
import Ginger from '../../Assets/Review/Ginger.jpg';
import Steve from '../../Assets/Review/Steve.jpg';
import Becky from '../../Assets/Review/Becky.jpg';
import Pam from '../../Assets/Review/Pam.jpg';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import {Perspective } from "@egjs/flicking-plugins";
import Fade from 'react-reveal/Fade';

class Reviews extends Component {
  state = {};

  render() {
    const plugins = [
      new Perspective({ rotate: 0.6 }),
    ];

    return (
      <div id='reviews'>
        <div>
          <Fade up><h1 style={{ textAlign: "center" }} >Don't Just Take Our Word</h1></Fade>

  
           <Flicking 
              circular={true}
              plugins={plugins}
              align="center"
              defaultIndex = "0"
            >
              <div className="panel">
                <ReviewCard
                  icon={wendy}
                  name="Wendy Curtis Davis"
                  text="Brennan  was very prompt and thorough in snow removal. I use to do my own snow shoveling , and he does a better job than I did. With an elderly mom I needed a good snow removal service to be able to go quickly if needed. Brennan was prompt to reply- Prompt to get there and get the job done !!"
                />
              </div>
              <div className="panel">
                <ReviewCard
                  icon={renee}
                  name="Renee Raymer Brumett"
                  text="Brennan and crew did such a great job! Had a huge tree down and part that still needed to come down. He was thorough and helpful and a great guy. You can tell he takes pride in his work and he works hard."
                />
              </div>
              <div className="panel">
                <ReviewCard
                  icon={Martha}
                  name="Martha Broughton (Devora)"
                  text="Brennan showed up when he said he would and followed through with everything we requested! That is so hard to find these days! He picked out great looking trees and shrubs for us! He was beyond pleasant to work with! We will definitely use him again for my future yard projects!"
                />
              </div>
              <div className="panel">
                <ReviewCard
                  icon={Ginger}
                  name="Ginger Crabtree"
                  text="Brennan listened attentively to our back yard drainage woes. He worked with us to transform the backyard from a mud pit to a beautiful livable dry space for us and our pets. We had consulted with 2 other companies. We were very pleased with Brennan’s knowledge, good communication and eco & pet friendly solutions. Highly recommend!"
                />
              </div>
              <div className="panel">
                <ReviewCard
                  icon={Steve}
                  name="Steve Lauck"
                  text="these guys were life savers. he came and looked at a tree that I was told was a huge problem. He cut it down in a little over an hour for a great price!  I would recommend these guys 100 times over!"
                />
              </div>
              <div className="panel">
                <ReviewCard
                  icon={Becky}
                  name="Becky Raymer Cummins"
                  text="Brennan is the best! He goes the extra mile and makes sure things are done right!"
                />
              </div>
              <div className="panel">
                <ReviewCard
                  icon={Pam}
                  name="Pam Carpenter"
                  text="We were in desperate need of landscape overhaul. Transformation lawn did an excellent job at a very fair price. I would highly recommend these guys."
                />
              </div>
            </Flicking>
      
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <a href='https://www.facebook.com/transformationlawnandlandscapellc/reviews' target='_blank'><button>Leave a Review</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
