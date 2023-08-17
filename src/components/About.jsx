import React from 'react';
import ImageSlider from '../slider/ImageSlider';
import { data } from '../slider/Data';

function About() {

  return (
    <>
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery of
          <span className="text-yellow-600 text-[3rem] lg:text-[4rem] m-1">
            Foods and Dishes
          </span>
        </p>

        <p className="text-base space-x-5 text-textColor text-center md:text-left">
          Dessert is a course that concludes a main meal. The course usually consists of sweet foods and beverages, such as dessert wine or liqueurs, but may include coffee, cheeses, nuts, or other savory items. In some parts of the world.

          The course usually consists of sweet foods and beverages, such as dessert wine or liqueurs, but may include coffee, cheeses, nuts, or other savory items. In some parts of the world, such as much of central and western Africa, there is no tradition of a dessert course to conclude a meal.
        </p>

        <div className='w-full flex pt-4 pb-4 items-center justify-center px-1 col-auto '>
        <img src="about.jpg" style={{height:"400px"}} alt="about"></img>
      </div>

        <p className="text-base space-x-5 text-textColor text-center md:text-left">
          It seems that the current situation with the coronavirus pandemic has had a significant impact on the restaurant industry. As the pandemic continues, restaurants are having to adapt and reevaluate their strategies in order to survive. People are still hesitant to eat out and are looking for ways to have food delivered to their homes, which has led to an increase in demand for contactless ordering and delivery. Many restaurants have adopted this method as a way to continue operating during the crisis, and it is becoming more common. Some people are even willing to pay a premium price for delivery services in order to avoid having to leave their homes. It is possible that contactless ordering and delivery will
          continue to be popular even after the pandemic subsides, as it offers convenience and safety for both restaurants and customers.
        </p>
      </div>


      <div className='w-full my-6 pt-4 pb-7 px-5 col-auto ' style={{ backgroundColor: "#d02e0c" }}>
        <h1 style={{ color: "rgb(236 174 10)", fontSize: "60px", textAlign: "center", fontWeight: "600",fontFamily:"cursive" }}>OUR MISSION</h1>
        <hr style={{padding:"3px",backgroundColor:"orangered",borderRadius:"3px"}}/>
        <p style={{ color: "white",fontSize:"30px",marginTop:"10px",fontFamily:"monospace"}}>"Bringing good food into your everyday. That's our mission.

          That means we don't just deliver- we bring it, always going the extra mile to make your experience memorable.

          And it means this is delicious food you can enjoy everyday: from vibrant salads for healthy office lunches, to indulgent family-sized pizzas, to fresh sushi for a romantic night in. Whatever you crave, we can help."

          WHERE WE ARE

          COUNTRIES</p>
      </div>
     
     {/*Slider */}
     <section>
      <h1  className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">Our Products</h1>
      <ImageSlider slides={data}/>
      </section>
    </>
  )
}

export default About