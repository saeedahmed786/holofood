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

             <h4 className = 'font-weight-bold pt-4'>What We Offer</h4>
             <p className = 'pt-2 text-justify'>There’s nothing cutout about ‘Holo Food’ . Not our pizzas. Not our kin and our sandwiches. Also, unquestionably not the manner in which we live. Around here, we don’t make due with anything short of food we’re glad to serve. Furthermore, we don’t simply check in. Not when we can likewise turn into our best, make companions, and have some good times while we’re grinding away. We’re the fast food  organization that lives unpacked.
We have in excess of 16,000 eateries and 350,000 colleagues in excess of 100 nations. Regardless of whether it’s the first Stuffed Crust or just baking a cookie with your coffee in space, we drive constantly ourselves to convey hot food, fast every time – anyplace you need to appreciate it.
At ‘Holo Food’ , we are not simply baking  pizza but involved in other fast food like sandwiches , burgers and cookies. We make individuals happy and satisfy their hunger. ‘Holo Food’ was based on the conviction that pizza night ought to be exceptional, and we convey that conviction into all that we do. With over 55 years of experience under our belts, we see how to best serve our clients through time tested administration standards: We make food we’re pleased to serve and convey it fast, with a grin.</p>
            <h4 className = 'font-weight-bold pt-4'>Our Mission</h4>
             <p className = 'pt-2 text-justify'>From the very first moment, the friends could look at their clients without flinching and guarantee them the best food around the local area — in light of the fact that they knew the ranchers who developed the fixings, and they realized those agriculturists thought about quality.
From that point forward, our agriculturists have developed directly close by us, and the fixings we use are as yet our most noteworthy need. Nobody cherishes food more than ‘Holo Food’ . That is the reason food is in our name — and dependably will be.</p>
            </div>

            <div className = 'map text-center'>
            <h4 className = 'font-weight-bolder mt-4 mb-4'>Our Location</h4>
    <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d13293.174995562942!2d73.04992823392195!3d33.59768199171091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d33.6022533!2d73.06901789999999!4m5!1s0x38df94839118da0d%3A0x43435febdafce368!2sfoodos%20saddar!3m2!1d33.5957857!2d73.0484395!5e0!3m2!1sen!2s!4v1607064741018!5m2!1sen!2s"  
    frameborder="0" style = {{border: '0', paddingLeft: '100px', paddingRight: '100px'  , width: "100%", height: '510px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>

         </>
        );
    
}

export default About;