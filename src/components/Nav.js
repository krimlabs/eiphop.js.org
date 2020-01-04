import React from 'react';

const GithubBadges = () => {
  return (<div className="flex justify-center">
    <div className="ph2">
      <a href="https://github.com/krimlabs/eiphop">
        <img src="https://img.shields.io/github/stars/krimlabs/eiphop?style=social" alt=""/>
      </a>
    </div>
    <div className="ph2">
      <a href="https://github.com/krimlabs/eiphop/network/members">
        <img src="https://img.shields.io/github/forks/krimlabs/eiphop?style=social" alt=""/>
      </a>
    </div>
    <div className="ph2">
      <a href="https://github.com/krimlabs/eiphop/issues">
        <img src="https://img.shields.io/github/issues/krimlabs/eiphop?style=social" alt=""/>
      </a>
    </div>
  </div>);
};

const Nav = () => {
  return (<div className="flex fixed top-0 w-100 justify-between pa2">
      <div className="ttu f7 b o-80">
        <a href="https://krimlabs.com">Made by Krim Labs</a>
      </div>
      <GithubBadges />
  </div>);
};

export default Nav;