import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Show from "./Cape-Town.jpg";
import Get from "./thumb.png";
import Display from "./Durban.jpg";
import Siyo from "./space1.jpg"
import Area from "./hall.jpg"
import Image from "./image.jpg"
import Cape from "./dining.jpg"
import Make from "./jhb.jpg"
import Look from "./breather-office.jpg"
import Cpt from "./gimage.jpg"
import Dis from "./solution.jpg"
import Gpic from "./hall2.jpg"
import Venue from "./download.jpg"
import Venue1 from "./source.gif"
import Venue2 from "./source1.gif"
import { faHome, faDove } from "@fortawesome/free-solid-svg-icons";

export default class Products extends Component {
     render(){
         return(
             <div>
                
            
              <div className="container">
                  <h1 id="a">Find a Space</h1>
                  <p id="b">Discover & Book a Space for Your Next Event</p>
                  <input id="d" placeholder="Locatiion" icon="search"/>
                  <input id="d" placeholder="What are you planning" icon="search"/><button>Search</button>
                
              </div>
              <section>
                  <div className="container1">
                  <h1>Where are you planing your event?</h1>
                  <p>Discover & Book a Space for Your Next Event</p>
               
                  </div>
              </section>
              <section id="e">
              <div className="contained">
                <img src={Show} className="App-logo" alt="Cape Town"
                />
                <div class="content">
                  <p>Cape Town</p>
                  </div>
            </div>
              <div className="contained">
               <img src={Get} className="App-logo" alt="Gauteng" />
               <div class="content"><p>Gauteng</p></div>
            </div>
       
          <div className="contained" > 
          <img src={Display} className="App-logo" alt="Durban"
        />
        <div class="content"><p>Durban</p></div>
     </div>
       </section>
       <div className="container1">
        <h1>Our Curated List</h1>
        <p>Some of our favourite, featured collections</p>
       </div>
       <section id="o">
         
      
              <div className="contained3">
                <img src={Cape} className="App-logo" alt="Cape Town"
                />
                <div class="top-right">CPT</div>
                <div class="content3"><p>Scenic Meeting Spots</p></div>
            </div>
              <div className="contained3">
               <img src={Gpic} className="App-logo" alt="Gauteng" />
               <div class="top-right">JHB</div>
               <div class="content3"><p>Affordable Party Venues</p></div>
            </div>
       
          <div className="contained3" > 
          <img src={Cpt} className="App-logo" alt="Durban"
        />
        <div class="top-right">DBN</div>
        <div class="content3"><p>Scenic Meeting Spots</p></div>
     </div>
     </section>
     <section id="e">
     <div className="contained1">
                <img src={Dis} className="App-logo" alt="Cape Town"
                />
                <div class="top-right">CPT</div>
                <div class="content1"><p>Affordable Party Venues</p></div>
            </div>
              <div className="contained1">
               <img src={Make} className="App-logo" alt="Gauteng" />
               <div class=""><p></p></div>
            </div>
       
          <div className="contained1" > 
          <img src={Look} className="App-logo" alt="Durban"
        />
        <div class="top-right">DBN</div>
        <div class="content1"><p>Scenic Meeting Spots</p></div>
     </div>
     </section>
       
       <div className="container1">
        <h1>Trending Spaces</h1>
        <p>Popular with Hourspace Users</p>
       </div>
       <section id="e">
       <div className="contained2">
                <img src={Siyo} className="App-logo" alt="Cape Town"
                />

                <div class="content2"><p>R750 ZAR</p></div>
                <div class="centered">Centered</div>
            
            </div>
              <div className="contained2">
               <img src={Area} className="App-logo" alt="Gauteng" />
               <div class="content2"><p>R750 ZAR</p></div>
               <div class="centered">Centered</div>
            
            </div>
       
          <div className="contained2" > 
          <img src={Image} className="App-logo" alt="Durban"
        />
        <div class="content2"><p>R750 ZAR</p></div>
        <div class="centered">Centered</div>
     </div>
        
       </section>
       <section>
         <div className="container2"style={{ color: "white" }}>
         <div id="f">
              <h3>100% Secured and Protected</h3>
              <p>Trust and Safety is our # 1 Priority at Hourspace</p> 
            </div>
          <section id="p">
            
           <div className="Looking" >
             <h4>Looking for a Space</h4>
           <p>Secure Merchant Transactions</p><p>Authenticated Hosts</p><p>Direct Messaging with Hosts</p><p>Host Profile and Reviews</p></div>
           <div className="Hosting">
             <h4>Hosting Out a Space</h4>
           <p>1,000,000 Insurance Coverage</p><p>Booking Platform Mannagement Flexiblle</p><p>Cancellation and Deposit Policies</p><p>24/7 Customer Support Team</p></div>
           </section>
       </div>
       </section>
       <h1 id="k">Meet Fellow Hourspacers</h1>
       <section >
       
         <div className="container1">
        
       </div>
       <section id="e">
       <div className="contained2">
                <img src={Venue} className="App-logo" alt="Cape Town"
                />

                
                <div class="centered">Centered</div>
            
            </div>
              <div className="contained2">
               <img src={Venue1} className="App-logo" alt="Gauteng" />
               
               <div class="centered">Centered</div>
            
            </div>
       
          <div className="contained2" > 
          <img src={Venue2} className="App-logo" alt="Durban"
        />
        
        <div class="centered">Centered</div>
     </div>
        
       </section>
       </section>

       <div className="about">
       <section>
           <div className="Hourspace" style={{ color: "rgb(152, 219, 174)" }}>
           
               <h3>Hourspace</h3>
               <a><p>About</p></a>
               <a><p>Contact Us</p></a>
               <a><p>Terms of Service</p></a>
               <a><p>Privacy Policy</p></a>
               <a><p>Cancellation Policy</p></a>
               <a><p>Space Use Agreement</p></a>
           </div>

           <div className="Discover" style={{ color: "rgb(152, 219, 174)" }}>
           <h3>Discover Spaces</h3>
                <a><p>How it works</p></a>
                <a><p>List your space</p></a>
               <a><p>Help Centre</p></a>
               <a><p>Press</p></a>
               <a><p>Site Map</p></a>
           </div>
           
           <div className="Connect" style={{ color: "rgb(152, 219, 174)" }}>
           <h3>Connect</h3>
           <FontAwesomeIcon icon={faHome} />
           <FontAwesomeIcon icon={faHome} />
           <FontAwesomeIcon icon={faHome} />
           <FontAwesomeIcon icon={faHome} />
           <FontAwesomeIcon icon={faHome} />
           <FontAwesomeIcon icon={faHome} />
           <FontAwesomeIcon icon={faHome} />
            <i class="fab fa-[facebook"></i>
           <i class="fab fa-twitter"></i>
           <i class="fab fa-google-plus-g"></i>
           <i class="fab fa-youtube"></i>
           <i class="fas fa-camera-retro"></i>
           <i class="fab fa-pinterest-p"></i>
           
           </div>
           </section>
       </div>
        </div>
      
        
     

         );
        
     }
 }
 
 
