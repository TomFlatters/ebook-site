import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import cover from './images/cover.png'
import logo_white from './images/logo_white.png'

import Navbar from 'react-bootstrap/Navbar';

import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <div className="App">
      <GlobalFonts/>

      <Navbar className="navbar-black">
        {/* <img className="navbar-logo" src={logo_white}/> */}
        StudyJump
      </Navbar>

      <div className="centre-row">
      <div className="col">
        <div className="row">
        <div className="panel">
          <h1 className="title">
            Get notified when we launch our ebook
          </h1>
          
          <div className="email-form">
           
            {/* EMAIL FORM  */}
            <div id="mc_embed_signup">
              <form action="https://gmail.us8.list-manage.com/subscribe/post?u=6ba70ae28d7ac6fb6c8c49d06&amp;id=6885c89af9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                    <input type="text" name="b_6ba70ae28d7ac6fb6c8c49d06_6885c89af9" tabindex="-1" value=""/>
                  </div>
                  <div className="clear">
                    <input type="submit" value="Submit" name="submit" id="mc-embedded-subscribe" className="button" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="panel-right">
          <img className="cover-pic" alt="Our book cover, titled 'Learn Better at Home: The Student Guide to Effective Self-Study'" src={cover}></img>
        </div>
        </div>
        <div className="story">
          <div className="story-inner">
            <p>
              <em className="font-charter">The Story</em>
              <br />
                We're all stuck at home, and learning can be hard at home. That's why we wanted to help students out during this tough time.
              </p>
            <p>
              So we made a survey, got some responses (thanks for contributing), and then did it all again to learn a bit more. We found that learning effectively
              at home is a major problem. Students are struggling to motivate themselves, set goals, and stay focussed.
            </p>
            <p>
              And that's when we realised we should share our experiences in an eBook: "Learn Better at Home: The Student Guide to Effective Self-Study".
            </p>
            <p>
            We're sharing key tools, tips, and methods for success in learning at home. Whether you want to succeed in your exams or teach yourself a new subject, we've got you covered. (Not literally - this isn't an insurance policy, sorry!)
            </p><p>
            We couldn't find anything available that's quite like what we're writing: an comprehensive, in-depth, student-written book on learning from home, whatever your learning aims.
            </p><p>
            We don't wnat to exclude anyone from accessing what we have to share, so we'll be using a 'Name Your Price' fundraiser, with every penny of profit going to charity. We would really appreciate any support you can provide. But, if you're tight on cash, you can read our book for free.
            </p>
            <p>
              <em className="font-charter">Who are we?</em>
              <br />
              We are four undergrads from the University of Oxford. We've self-studied for exams and to gain a better understanding of the world. 
            </p><p>
              And we're all a bit different. Peter and Scarlett study PPE (Philosophy, Politics, and Economics), Tejas does Physics, and I (Tom) study Materials Science.
              </p><p>
              Peter taught himself a sizable chunk of Further Maths A-level. Scarlett taught herself most of her A-levels in Chemistry and English Literature. I taught myself Additional Maths at GCSE. But Tejas outdid us all by self-teaching all 4 of his A-levels!
              </p><p>
              It's not just about exams, though. At Oxford, we're often expected to teach ourselves content and concepts, so we've all developed these skills since starting university. I've completed Computer Science courses to expand my knowledge, and Tejas and Peter have done the same in Physics and Maths.
              </p><p>
              We can share insights based on the things we found that worked - and the things that didn't. We hope that, with our breadth of subjects and experiences in learning them, we can offer something to everyone.
              </p>
              <div id="mc_embed_signup">
              <form action="https://gmail.us8.list-manage.com/subscribe/post?u=6ba70ae28d7ac6fb6c8c49d06&amp;id=6885c89af9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required />
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                    <input type="text" name="b_6ba70ae28d7ac6fb6c8c49d06_6885c89af9" tabindex="-1" value=""/>
                  </div>
                  <div>
                    <input type="submit" value="Submit" name="submit" id="mc-embedded-subscribe" className="button" />
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
      </div>

      </div>
      <Navbar className="navbar-black">
        <img className="footer-logo" src={logo_white} alt="StudyJump logo"></img>
      </Navbar>
      </div>
  );
}

export default App;
