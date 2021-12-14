import React from "react";
import styles from './Slider.module.css'
import React, {useState, useEffect} from "react"
import d1 from "../../../public/img/slider/d1.jpg"
import d2 from "../../../public/img/slider/d1.jpg"
import d3 from "../../../public/img/slider/d1.jpg"
import d4 from "../../../public/img/slider/d1.jpg"



    const img = [
        <img key={1} src={d1} />,
        <img key={2} src={d2} />,
        <img key={3} src={d3} />,
        <img key={4} src={d4} />,

    ]
   export function  Slider() {
        const [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(()=> {
                setActiveIndex((current) => {
                    const res = current === img.length - 1 ? 0 : current +1
                    return res
                })
            }, 3000)

            return clearInterval()
        }, [])
        const prevIndex = activeIndex ? activeIndex - 1 :img.length - 1;
        const nextIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

       return (
           <div className="slider">
               <div className="slider-img slider-img-prev"
                    key={prevImgIndex}>
                   {img[prevImgIndex]}
               </div>
               <div className="slider-img"
                    key={activeIndex}>
                   {img[activeIndex]}
               </div>
               <div className="slider-img slider-img-next"
                    key={nextImgIndex}>
                   {img[nextImgIndex]}
               </div>
           </div>
       )

}