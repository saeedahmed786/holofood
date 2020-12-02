import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider3 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider1 from '../images/slider3.jpg';
import slider4 from '../images/slider4.jpg';


const About = () => {
        return (
            <>
            <Carousel background = ' white'>
             <div>
                    <img src={slider1} className = 'w-50' />
                    <p className="legend">Restaurant's Inner View</p>
                </div>
                <div>
                    <img src={slider3} className = 'w-50' />
                    <p className="legend">Respectful Staff</p>
                </div>
                <div>
                    <img src={slider2} className = 'w-50'/>
                    <p className="legend">Delicious Cooking Skills</p>
                </div>
                <div>
                    <img src={slider4} className = 'w-50' />
                    <p className="legend">Customers on fire</p>
                </div>
         </Carousel>

         <div className = 'text-center mt-4 container'>
            <h1 className = 'font-weight-bold'>About Us</h1>
            <h4 className = 'font-weight-bold pt-4'>WHERE WE COME FROM</h4>
             <p className = 'pt-2'>
             In 1958, two friends acquire some money from their mother to open a small eatery put in Wichita, Kansas. They named it ‘Holo Food’ , in light of the fact that their sign just had space for eight letters. How significant!Mediavine
Before long, the eatery developed. Why? The food was great. The services felt like home. What’s more, the clients were dealt with like family. We’ve been conveying that equivalent food and administration from that point onward.
             </p>

             <h4 className = 'font-weight-bold pt-4 pt-4'>What We Offer</h4>
             <p className = 'pt-2 text-justify'>There’s nothing cutout about ‘Organization Name’ . Not our pizzas. Not our kin and our sandwiches. Also, unquestionably not the manner in which we live. Around here, we don’t make due with anything short of food we’re glad to serve. Furthermore, we don’t simply check in. Not when we can likewise turn into our best, make companions, and have some good times while we’re grinding away. We’re the fast food  organization that lives unpacked.
We have in excess of 16,000 eateries and 350,000 colleagues in excess of 100 nations. Regardless of whether it’s the first Stuffed Crust or just baking a cookie with your coffee in space, we drive constantly ourselves to convey hot food, fast every time – anyplace you need to appreciate it.
At ‘Holo Food’ , we are not simply baking  pizza but involved in other fast food like sandwiches , burgers and cookies. We make individuals happy and satisfy their hunger.’Company Name’ was based on the conviction that pizza night ought to be exceptional, and we convey that conviction into all that we do. With over 55 years of experience under our belts, we see how to best serve our clients through time tested administration standards: We make food we’re pleased to serve and convey it fast, with a grin.</p>
            <h4 className = 'font-weight-bold pt-4 pt-4'>Our Mission</h4>
             <p className = 'pt-2 text-justify'>From the very first moment, the friends could look at their clients without flinching and guarantee them the best food around the local area — in light of the fact that they knew the ranchers who developed the fixings, and they realized those agriculturists thought about quality.
From that point forward, our agriculturists have developed directly close by us, and the fixings we use are as yet our most noteworthy need. Nobody cherishes food more than ‘Organization Name’ . That is the reason food is in our name — and dependably will be.</p>
            </div>

         </>
        );
    
}

export default About;