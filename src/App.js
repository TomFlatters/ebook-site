import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import cover from './images/cover.png'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <div className="App">
      <GlobalFonts/>

      <Navbar className="navbar-black">
        {/* <img className="navbar-logo" src={logo_white}/> */}
        StudyJump
      </Navbar>

      <div className="row">
        <div className="panel">
          <h1 className="title">
            Get notified when we launch our ebook
          </h1>
          <div className="email-form">
            Your email: <br/>
            <input type="text"></input>
            <Button type="submit" className="btn btn-primary">Submit</Button>
          </div>
        </div>
        <div className="panel-right">
          <img className="cover-pic" src={cover}></img>
        </div>
      </div>

    </div>
  );
}

export default App;
