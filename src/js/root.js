/**
 * Created by DeLL on 2017/4/17.
 */
import React from "react";
import ReactDom from "react-dom";
import {Router,Route,hashHistory} from "react-router";
import {Button} from "antd";
import PCIndex from "./component/pc_index";
import MobileIndex from "./component/mobile_index";
import "antd/dist/antd.css";
import MediaQuery from "react-responsive";
export default class Root extends React.Component{
    render(){
      return (
          <div>
              <MediaQuery query="(min-device-width:1224px)">
                  <Router history={hashHistory}>
                      <Route path="/" component={PCIndex}></Route>
                      <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                  </Router>
              <PCIndex/>
              </MediaQuery>
              <MediaQuery query="(max-device-width:1224px)">
                  <Router history={hashHistory}>
                      <Route path="/" component={MobileIndex}></Route>
                      <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                  </Router>
                  <MobileIndex/>
              </MediaQuery>
          </div>
      );
    };
}
ReactDom.render(
    <Root/>,document.getElementById("mainContainer")
);
