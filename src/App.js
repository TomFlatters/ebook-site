import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import cover from './images/cover.png'

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
          
          <div className="p-text">
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
        </div>
        <div className="panel-right">
          <img className="cover-pic" src={cover}></img>
        </div>
        </div>
        <div className="story">
          <div className="story-inner">
            <p>
              <em className="font-charter">The Story</em>
              <br />
                We're all stuck at home, and learning can be hard at home. That's why we wanted to find out what
                students are struggling with the most.
              </p>
            <p>
              So we made a survey, got some responses (thanks for contributing), and then did it all again to learn a bit more. We found that learning effectively
              at home is a major problem. Students are struggling with motivation, goal setting, and
              remaining focussed. And that's when we realised we should share our experiences in an ebook - titled "Learn Better at Home".
              </p>
            <p>
              <em className="font-charter">Who are we?</em>
              <br />
              We are 4 Oxford undergraduates who have each had experience in self-studying for exams. And we're
              all a bit different: Peter and Scarlett read PPE, Tejas does Physics, and I (Tom) study Materials Science.
              </p><p>
              We hope our breadth of subjects and experiences in learning them means we can offer something to everyone.
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
      
      </div>
  );
}

export default App;
