import React from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';

class ReviewCard extends React.Component {
    state = {  
    } 
    render() { 
       
        return (
            
            <div id = "reviewCard">

                <div>
                    <div className='heading'>
                        <img src ={this.props.icon}/>
                        <p className='name'><b>{this.props.name}</b></p>
                    </div>
                    <p>{this.props.text}</p>    
             </div>   
            </div>
        );
    }
}

 
export default ReviewCard;