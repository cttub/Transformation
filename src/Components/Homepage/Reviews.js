import React, { Component } from 'react';
import ReviewCard from '../ReviewCard';
import wendy from '../../Assets/Review/Wendy.jpg';

class Reviews extends Component {
    state = {  } 
    render() { 
        return (
            <div id='reviews'>
                <div>
                    <h1 style={{textAlign: "center"}} className='white-txt'>Don't Just Take Our Word</h1>

                    <div className='review-batch'>
                        <ReviewCard
                        icon = {wendy}
                        name = "Wendy Curtis Davis"
                        text = "Brennan  was very prompt and thorough in snow removal. I use to do my own snow shoveling , and he does a better job than I did. With an elderly mom I needed a good snow removal service to be able to go quickly if needed. Brennan was prompt to reply- Prompt to get there and get the job done !!"
                        />
                        <ReviewCard
                        icon = {wendy}
                        name = "Wendy Curtis Davis"
                        text = "Brennan  was very prompt and thorough in snow removal. I use to do my own snow shoveling , and he does a better job than I did. With an elderly mom I needed a good snow removal service to be able to go quickly if needed. Brennan was prompt to reply- Prompt to get there and get the job done !!"
                        />
                        <ReviewCard
                        icon = {wendy}
                        name = "Wendy Curtis Davis"
                        text = "Brennan  was very prompt and thorough in snow removal. I use to do my own snow shoveling , and he does a better job than I did. With an elderly mom I needed a good snow removal service to be able to go quickly if needed. Brennan was prompt to reply- Prompt to get there and get the job done !!"
                        />
                        
                       
                    </div>
                    
                    
             
                </div>

            </div>

        );
    }
}
 
export default Reviews;