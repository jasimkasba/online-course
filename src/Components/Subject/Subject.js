import React from 'react';
import './Subject.css'

const Subject = (props) => {
    // console.log(props);
    const {name, image, topic, price, instructor} = props.subject
    return (
        <div className="subject ">
            <div>
                 <img src={image} alt=""/>
            </div>

            <div className="subject-name ">

              <h4>{name}</h4>
              <h3><small>by: {instructor} </small></h3>
              <h5>{topic}</h5>
              <h3>Price: $ {price}</h3>
              <button onClick= {() => props.handleAddSubject(props.subject)} className="btn btn-primary  mt-3"> Enroll Now</button>
            
            </div>
            
            
        </div>
    );
};

export default Subject;