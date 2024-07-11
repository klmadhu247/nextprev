import React, {useState,useEffect} from "react";
import reviews from './data';
import './nextnav.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {motion} from 'framer-motion'
import { FaQuoteRight } from "react-icons/fa";

const animations = {
    initial: {opacity:0, x:200},
    animate: { opacity: 1, x:0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x:-200,  transition: { duration: 0.5 } },
}


function NextNav ()
{
    const [index,setIndex] = useState(0);

    const [reserveReview,setReserveReview] = useState(reviews)

    const handleNext = (index)=>
        {
            
            if(index ===reviews.length-1)
                {
                    
                    setIndex(0)
                    
                }
                else{
                    setIndex(index+1)
                    
                  
                }

        }

        const handlePrev =()=>
            {
                if(index===0)
                    {
                        setIndex(reviews.length-1)
                       
                    }
                    else{
                        setIndex(index-1)
                        
                    }

            }
    return(
        <div>
            <section className="container_main">
                <div className="heading">
                    <h3>Our Reviews</h3>
                    <div className="underline"></div>
                </div>

                

                <article className="article__container">
                 <div  className="image__holder"> <motion.img variants={animations} initial="initial" animate='animate' exit='exit'  src={reserveReview[index].image} className="review__image" key={reserveReview[index].id}/></div> 
                 <motion.i  variants={animations} initial="initial" animate='animate' exit='exit' key={reserveReview[index].id} className="quote"><FaQuoteRight/></motion.i>
                   <motion.h4 variants={animations} initial="initial" animate='animate' exit='exit' >{reserveReview[index].name}</motion.h4>
                   <motion.p variants={animations} initial="initial" animate='animate' exit='exit' className="job__title">{reserveReview[index].job}</motion.p>
                   <motion.p variants={animations} initial="initial" animate='animate' exit='exit'>{reserveReview[index].text}</motion.p>
                 

                  <div className="btn__container"> <button onClick={handlePrev} className="prev__Button"><IoIosArrowBack /></button> 
                  <button onClick={()=>handleNext(index)} className="next__Button"><IoIosArrowForward/></button> </div>
                  <button className="surprise__button">Surprise Me</button>
                </article>
                

            </section>
            
        </div>
    )
}
export default NextNav