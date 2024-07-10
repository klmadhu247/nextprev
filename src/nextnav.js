import React, {useState,useEffect} from "react";
import reviews from './data';
import './nextnav.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function NextNav ()
{
    const [index,setIndex] = useState(0);

    const [reserveReview,setReserveReview] = useState(reviews)

    const handleNext = (index)=>
        {
            
            if(index ===reviews.length-1)
                {
                    setReserveReview(reviews[index])
                    setIndex(0)
                    
                }
                else{
                    setIndex(index+1)
                    
                  setReserveReview(reviews[index])
                }

        }

        const handlePrev =()=>
            {
                if(index===0)
                    {
                        setIndex(reviews.length-1)
                        setReserveReview(reviews[index])
                    }
                    else{
                        setIndex(index-1)
                        setReserveReview(reviews[index])
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
                  <div className="image__holder"> <img src={reserveReview.image} className="review__image"/></div> 
                   <h4>{reserveReview.name}</h4>
                   <p className="job__title">{reserveReview.job}</p>
                   <p>{reserveReview.text}</p>

                  <div className="btn__container"> <button onClick={handlePrev} className="prev__Button"><IoIosArrowBack /></button> 
                  <button onClick={()=>handleNext(index)} className="next__Button"><IoIosArrowForward/></button> </div>
                </article>

            </section>
            
        </div>
    )
}
export default NextNav