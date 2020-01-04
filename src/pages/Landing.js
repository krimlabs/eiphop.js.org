import React from 'react'
import {Link} from 'react-router-dom'

import Nav from '../components/Nav';
import arrowPng from '../images/arrow-right.png';

const Landing = () => {
  return (<div className="vh-100 w-100 dt tc bg-black white">
    <Nav />
    <div className="dtc v-mid">
      <div className="f1 b nt3">EIPHOP</div>
      <div className="mt1 f5">A fetch like wrapper for elecron's ipc. </div>
      <div className="flex mt5 justify-center">
        <div className="pa2 mr3 b pointer dim">
          <a href="https://github.com/krimlabs/eiphop/">
            Github <img className="ml1" src={arrowPng} style={{height: 12}}/>
          </a>
        </div>
        <div className="ba pv2 ph3 b--white b br2 pointer dim">
          <Link to="/documentation">
            View Documentation <img className="ml1" src={arrowPng} style={{height: 12}}/>
          </Link>
        </div>
      </div>
    </div>
  </div>)
};

export default Landing;
