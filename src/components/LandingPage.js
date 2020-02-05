import React, {Component} from "react";



class LandingPage extends Component {
    render() {
        return(
            <div className="dw">
            <div className="dw-pnl dw-pnl--fcs">
              <div className="dw-pnl__cntnt bd--white tx--white">
                <h1>Pure CSS masonry layout</h1>
              </div>
            </div>
            <div className="dw-pnl">
              <div className="dw-pnl__cntnt bd--white tx--white">
                <ul>
                  <li>Configurable</li>
                  <li>Responsive</li>
                  <li>Supports clusters</li>
                </ul>
              </div>
            </div>
            <div className="dw-pnl "><img src={ require("../images/FF_Landing.png") } className="dw-pnl__cntnt" alt="Opps"/>
            </div>
            <div className="dw-pnl ">
              <div className="dw-pnl__cntnt tx--white bd--white">
                <p>Phasellus malesuada, urna non auctor viverra, libero ex pellentesque urna, id rhoncus eros lacus tristique risus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
            </div>
            <div className="dw-pnl ">
              <img src={ require("../images/Which_Train_When.png") } className="dw-pnl__cntnt" alt="Opps 2"/>
            </div>
            <div className="dw-pnl ">
              <img src={ require("../images/Stylized_Profile2.png") } className="dw-pnl__cntnt" alt="Opps 3"/>
            </div>
            <div className="dw-pnl dw-clstr dw-clstr--hrz">
              <div className="dw-clstr__sgmnt dw-clstr__sgmnt--rw ">
                <div className="dw-pnl dw-clstr__sgmnt ">
                  <div className="dw-pnl__cntnt bd--white tx--white">
                    <h2>How</h2>
                  </div>
                </div>
              </div>
              <div className="dw-clstr__sgmnt dw-clstr__sgmnt--rw ">
                <div className="dw-pnl dw-clstr__sgmnt ">
                  <div className="dw-pnl__cntnt bd--white tx--white">
                    <h2>about</h2>
                  </div>
                </div>
                <div className="dw-pnl dw-clstr__sgmnt ">
                  <div className="dw-pnl__cntnt bd--white tx--white">
                    <h2>clusters?</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="dw-pnl ">
              <img src={ require("../images/Stylized_Profile.png") } className="dw-pnl__cntnt" alt="Opps 4"/>
            </div>
            <div style={{height: "200px"}} className="dw-pnl dw-flp">
              <div className="dw-pnl__cntnt dw-flp__cntnt">
                <div className="dw-flp__pnl dw-flp__pnl--frnt tx--white bd--white tx--center">
                  <h1>You can flip me round</h1>
                </div>
                <div className="dw-flp__pnl dw-flp__pnl--bck bd--white tx--white tx--center">
                  <h1>Yeah that's right</h1>
                </div>
              </div>
            </div>
            <div className="dw-pnl dw-clstr dw-clstr--vrt">
              <div className="dw-clstr__sgmnt dw-clstr__sgmnt--clmn ">
                <div className="dw-pnl dw-clstr__sgmnt ">
                  <div className="dw-pnl__cntnt bd--white tx--white">
                    <h2>A</h2>
                  </div>
                </div>
              </div>
              <div className="dw-clstr__sgmnt dw-clstr__sgmnt--clmn ">
                <div className="dw-pnl dw-clstr__sgmnt ">
                  <div className="dw-pnl__cntnt bd--white tx--white">
                    <h2>vertically</h2>
                  </div>
                </div>
                <div className="dw-pnl dw-clstr__sgmnt ">
                  <div className="dw-pnl__cntnt bd--white tx--white">
                    <h2>flowed</h2>
                  </div>
                </div>
                <div className="dw-pnl dw-clstr__sgmnt ">
                  <div className="dw-pnl__cntnt bd--white tx--white">
                    <h2>cluster</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="dw-pnl "><img src={ require("../images/Hockey_Slang_Game.png") } className="dw-pnl__cntnt" alt="Opps 5"/>
            </div>
            <div className="dw-pnl ">
              <div className="dw-pnl__cntnt bd--white bg--darkred tx--white">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu justo ex. Praesent mollis augue sagittis eros pharetra feugiat. Phasellus dignissim est lacus. Sed nec imperdiet dolor, sit amet mattis ex. Sed sed augue eu neque tristique commodo. Mauris aliquet tortor sollicitudin nibh molestie, id egestas nisl sollicitudin. Aliquam erat volutpat. Donec quis ultrices ligula. Cras sed purus risus. Curabitur quis eros eu tortor semper eleifend. Pellentesque lorem elit, dignissim interdum massa id, malesuada rutrum ligula. Suspendisse tempor quis mauris eu facilisis. Phasellus non volutpat diam, non dapibus ligula. Ut non molestie ex, nec sagittis mi. Curabitur suscipit tellus id dolor pretium blandit. Cras tristique tristique pharetra.</p>
              </div>
            </div>
            <div className="dw-pnl "><img src="https://unsplash.it/425/?random" className="dw-pnl__cntnt"/>
            </div>
            <div className="dw-pnl dw-pnl--fcs">
              <div className="dw-pnl__cntnt tx--white bd--white tx--center">
                <h1>Focus on hover</h1>
              </div>
            </div>
            <div className="dw-pnl ">
              <div className="dw-pnl__cntnt tx--white bd--white">
                <h2>Title for some content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu justo ex. Praesent mollis augue sagittis eros pharetra feugiat. Phasellus dignissim est lacus. Sed nec imperdiet dolor, sit amet mattis ex. Sed sed augue eu neque tristique commodo. Mauris aliquet tortor sollicitudin nibh molestie, id egestas nisl sollicitudin. Aliquam erat volutpat. Donec quis ultrices ligula. Cras sed purus risus. Curabitur quis eros eu tortor semper eleifend.</p>
              </div>
            </div>
            <div className="dw-pnl dw-pnl--pls">
              <div className="dw-pnl__cntnt tx--white bd--white bg--darkred tx--center">
                <h1>Pulse on hover</h1>
              </div>
            </div>
            <div className="dw-pnl "><img src="https://unsplash.it/440/?random" className="dw-pnl__cntnt"/>
            </div>
            <div className="dw__fcs-crtn"></div>
          </div>
        );
    }
}

export default LandingPage;