import React from 'react';
import './Courses.css'
import FakeData from '../../FakeData';
import { useState } from 'react';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';


const Courses = () => {
    const data = FakeData;
     const [subject, setSubject] = useState(data);

    const [cart, setCart] = useState([]);

    const handleAddSubject = (sub) =>{
        const newCart = [...cart, sub];
        setCart(newCart);
    }
    return (
        <div className = "course-container">
            <div className = "subject-container">
                
                {
                    subject.map(course => <Subject 
                        handleAddSubject = {handleAddSubject}
                        subject={course}
                        ></Subject>)
                }

            </div>
            <div className = "cart-container">
                <Cart cart={cart}></Cart>
        
            </div>
            
            
        </div>
    );
};

export default Courses;