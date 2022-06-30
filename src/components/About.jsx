import React from 'react'

function About() {
  return (
    <>
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery of
          <span className="text-yellow-600 text-[3rem] lg:text-[4rem]">
            Foods and Dishes
          </span>
        </p>

        <p className="text-base space-x-2 text-textColor text-center md:text-left">
        Desssert is a course that concludes a main meal. The course usually consists of sweet foods and beverages, such as dessert wine or liqueurs, but may include coffee, cheeses, nuts, or other savory items. In some parts of the world.

The course usually consists of sweet foods and beverages, such as dessert wine or liqueurs, but may include coffee, cheeses, nuts, or other savory items. In some parts of the world, such as much of central and western Africa, there is no tradition of a dessert course to conclude a meal.
        </p>
         </div>

         <div className='w-full flex pt-4 pb-4 items-center justify-center px-1 col-auto '>
          <img src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg" alt="about"></img>
          </div>
     
    <div className='w-full my-6 pt-4 pb-7 px-5 col-auto ' style={{backgroundColor:"red"}}>
    <h1 style={{color:"#f9c5c5",fontSize:"48px",textAlign:"center",fontWeight:"600"}}>OUR MISSION</h1>
<p style={{color:"white"}}>"Bringing good food into your everyday. That's our mission.

That means we don't just deliver--we bring it, always going the extra mile to make your experience memorable.

And it means this is delicious food you can enjoy everyday: from vibrant salads for healthy office lunches, to indulgent family-sized pizzas, to fresh sushi for a romantic night in. Whatever you crave, we can help."

WHERE WE ARE

COUNTRIES</p>
</div>
     </>
  )
}

export default About