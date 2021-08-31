import React from 'react';
import ReactPlayer from 'react-player';
import { BrowserRouter, Link, Route, Switch , Redirect} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
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
                <Link to = "/register" > Become A Member</Link>
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
                                        <p> Whether you're a beginner or a pro, a fitness boss or a yoga addict.Fitness is must</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="second one"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>New Gym Training</h4>
                                        <p>We are planing more workout sessions for you to explore your potentials. Come join us!!</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="third gym training"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Basic Muscle Course</h4>
                                        <p>This fast-track workout plan will help you drastically improve your physique and fitness levels.</p>
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
                                        <p>Advanced bodybuilder workout for best of lifting experience.Step up your training and re-ignite big gains!</p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="training fifth"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Yoga Training</h4>
                                        <p>Yoga offers health, which is physical, psychological, social wellbeing which makes body strong & efficient. </p>
                                        <a href="#" class="text-button">Discover More</a>
                                    </div>
                                </li>
                                <li class="feature-item">
                                    <div class="left-icon">
                                        <img src="images/features-first-icon.png" alt="gym training"/>
                                    </div>
                                    <div class="right-content">
                                        <h4>Body Building Course</h4>
                                        <p> Students are trained to teach and guide, exercise enthusiasts in the gyms.</p>
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
        <div>
        <br></br>
        <table class="table table-borderless" Style="width:100%;text-align: ;">
                <thead >
                    <tr Style="background-color : #7fc919">
                        <th Style="width: 35%;">Contact Us</th>
                        <th Style="width: 30%;">Gym</th>
                        <th Style="width: 35%;">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr Style="background-color : #7fc919" >
                        <td><b>Contact No :</b> <br/>8390678530<br/>8674539261</td>
                        <td><b>Address :</b><br/> 123, central perk <br/>Maharashtra</td>
                        <td><FacebookIcon/> <InstagramIcon/> <TwitterIcon/><br/><br/><YouTubeIcon/> <EmailIcon/></td>
                        
                    </tr>
                    <tr Style="background-color : #7fc919">
                        <td><b>Email Id:</b> <br/>gym@gmail.com<br/>gymsuppo@gmail.com </td>
                        <td><b>Maps<br/>Gallery<br/>blogs</b></td>
                      
                        <td></td>
                    </tr>
                    <tr Style="background-color : #7fc919">
                        <td></td>
                        <td></td>
                        <td></td>
                       
                    </tr>
                </tbody>
            </table>

        </div>

        </div>
    )
}

export default Home;