import React from 'react';
import ReactPlayer from 'react-player';
import  '../css/bootstrap.min.css';
import '../css/font-awesome.css';
import '../css/templatemo-training-studio.css' ;

const Home = () => { 
    return (
        <div>
        <div className="main-banner">

            {/* <video autoplay muted loop id="bg-video">
                <source controls autostart autoPlay src="videos/video1.mp4" type="video/mp4" />
            </video> */}
             <ReactPlayer 
                playing={true}
                url= 'videos/video1.mp4'
                width='100%'
                height='50%'
                controls = {false}
                loop = {true}
            
          />
           <div class="video-overlay header-text">
            <div class="caption">
                <h6>work harder, get stronger</h6>
                <h2>easy with our <em>gym</em></h2>
                <div class="main-button scroll-to-section">
                    <a href="#features">Become a member</a>
                </div>
            </div>
        </div>
          </div>
                
                <section class="section" id="features">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                            <div class="section-heading">
                                <h2> <em>Choose The Plan thats best for You</em></h2>
                                <img src="images/line-dec.png" alt="waves"/>
                                <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <ul class="features-items">
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="First One"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Basic Fitness</h4>
                                        <p>Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="second one"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>New Gym Training</h4>
                                        <p>If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="third gym training"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Basic Muscle Course</h4>
                                        <p>Credit goes to <a rel="nofollow" href="https://www.pexels.com" target="_blank">Pexels website</a> for images and video background used in this HTML template.</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul class="features-items">
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="fourth muscle"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Advanced Muscle Course</h4>
                                        <p>You may want to browse through <a rel="nofollow" href="https://templatemo.com/tag/digital-marketing" target="_parent">Digital Marketing</a> or <a href="https://templatemo.com/tag/corporate">Corporate</a> HTML CSS templates on our website.</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="training fifth"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Yoga Training</h4>
                                        <p>This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="gym training"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Body Building Course</h4>
                                        <p>Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div class="section-heading">
            <h2> <em>Locate US </em></h2>
            </div>
            <iframe width="600" height="450" style={{ border: 0 }} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJH_BFA327wjsRR2-gR8YgjG4&key=AIzaSyC_MXOOC_-_6Ke8T7TblsGjgmdt8jXXY0w"></iframe>
        
        </div>
    )
}

export default Home;