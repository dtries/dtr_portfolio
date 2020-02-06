import React, {Component} from "react";
import {Link} from "react-router-dom";


class LandingPage extends Component {
    render() {
        return(
          <div className="tile">
          <div className="tile-pnl tile-pnl--fcs">
            <div className="tile-pnl__cntnt bd--white tx--white">
              <h1>Pure CSS masonry layout</h1>
            </div>
          </div>
          <div className="tile-pnl">
            <div className="tile-pnl__cntnt bd--white tx--white">
              <ul>
                <li>Configurable</li>
                <li>Responsive</li>
                <li>Supports clusters</li>
              </ul>
            </div>
          </div>
          <div className="tile-pnl "><img src={  require("../images/FF_Landing.png") } className="tile-pnl__cntnt" alt=""/>
          </div>
          <div className="tile-pnl ">
            <div className="tile-pnl__cntnt tx--white bd--white">
              <p>Phasellus malesuada, urna non auctor viverra, libero ex pellentesque urna, id rhoncus eros lacus tristique risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
          </div>
          <div className="tile-pnl ">
            <img src={ require("../images/Hockey_Slang_Game.png") } className="tile-pnl__cntnt" alt=""/>
          </div>
          <div className="tile-pnl ">
            <img src={ require("../images/Which_Train_When.png") } className="tile-pnl__cntnt" alt=""/>
          </div>
          <div className="tile-pnl tile-clstr tile-clstr--hrz">
            <div className="tile-clstr__sgmnt tile-clstr__sgmnt--rw ">
              <div className="tile-pnl tile-clstr__sgmnt ">
                <div className="tile-pnl__cntnt bd--white tx--white">
                  <h2>How</h2>
                </div>
              </div>
            </div>
            <div className="tile-clstr__sgmnt tile-clstr__sgmnt--rw ">
              <div className="tile-pnl tile-clstr__sgmnt ">
                <div className="tile-pnl__cntnt bd--white tx--white">
                  <h2>about</h2>
                </div>
              </div>
              <div className="tile-pnl tile-clstr__sgmnt ">
                <div className="tile-pnl__cntnt bd--white tx--white">
                  <h2>clusters?</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="tile-pnl ">
            <img src={ require("../images/Stylized_Profile.png") } className="tile-pnl__cntnt" alt=""/>
          </div>
          <div className="tile-pnl tile-flp tile-flp--lg tile-pnl--fcs tile-pnl--pls">
            <div className="tile-pnl__cntnt tile-flp__cntnt">
              <div className="tile-flp__pnl tile-flp__pnl--frnt tx--white bd--white tx--center">
                <img src={ require("../images/FF_Landing.png") } className="tile-pnl__cntnt" alt=""/>
              </div>
              <div className="tile-flp__pnl tile-flp__pnl--bck bd--white tx--white tx--center bg--purple">
                <h4>Description</h4>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="http://fledgling-fitness.herokuapp.com/" target="blank">The App</a>
              </div>
            </div>
          </div>
          <div className="tile-pnl tile-clstr tile-clstr--vrt">
            <div className="tile-clstr__sgmnt tile-clstr__sgmnt--clmn ">
              <div className="tile-pnl tile-clstr__sgmnt ">
                <div className="tile-pnl__cntnt bd--white tx--white">
                  <h2>A</h2>
                </div>
              </div>
            </div>           
            <div className="tile-clstr__sgmnt tile-clstr__sgmnt--clmn ">
              <div className="tile-pnl tile-clstr__sgmnt ">
                <div className="tile-pnl__cntnt bd--white tx--white">
                  <h2>vertically</h2>
                </div>
              </div>
              <div className="tile-pnl tile-clstr__sgmnt ">
                <div className="tile-pnl__cntnt bd--white tx--white">
                  <h2>flowed</h2>
                </div>
              </div>
              <div className="tile-pnl tile-clstr__sgmnt ">
                <div className="tile-pnl__cntnt bd--white tx--white">
                  <h2>cluster</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="tile-pnl "><img src= { require("../images/Which_Train_When.png") } className="tile-pnl__cntnt" alt=""/>
          </div>
          <div className="tile-pnl ">
            <div className="tile-pnl__cntnt bd--white bg--darkred tx--white">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu justo ex. Praesent mollis augue sagittis eros pharetra feugiat. Phasellus dignissim est lacus. Sed nec imperdiet dolor, sit amet mattis ex. Sed sed augue eu neque tristique commodo. Mauris aliquet tortor sollicitudin nibh molestie, id egestas nisl sollicitudin. Aliquam erat volutpat. Donec quis ultrices ligula. Cras sed purus risus. Curabitur quis eros eu tortor semper eleifend. Pellentesque lorem elit, dignissim interdum massa id, malesuada rutrum ligula. Suspendisse tempor quis mauris eu facilisis. Phasellus non volutpat diam, non dapibus ligula. Ut non molestie ex, nec sagittis mi. Curabitur suscipit tellus id dolor pretium blandit. Cras tristique tristique pharetra.</p>
            </div>
          </div>
          <div className="tile-pnl "><img src= { require("../images/Stylized_Profile2.png") } className="tile-pnl__cntnt" alt=""/>
          </div>
          <div className="tile-pnl tile-pnl--fcs">
            <div className="tile-pnl__cntnt tx--white bd--white tx--center">
              <h1>Focus on hover</h1>
            </div>
          </div>
          <div className="tile-pnl ">
            <div className="tile-pnl__cntnt tx--white bd--white">
              <h2>Title for some content</h2>
            </div>
          </div>
          <div className="tile-pnl tile-pnl--pls">
            <div className="tile-pnl__cntnt tx--white bd--white bg--darkred tx--center">
              <h1>Pulse on hover</h1>
            </div>
          </div>
          <div className="tile-pnl "><img src= { require("../images/FF_Landing.png") } className="tile-pnl__cntnt" alt=""/>
          </div>
          <div className="tile__fcs-crtn"></div>
        </div>
        );
    }
}

export default LandingPage;