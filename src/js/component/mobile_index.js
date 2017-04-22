import React from "React";
import {Tab,Carousel} from "antd";
const TabPane = Tabs.TabPane;
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import MobileList from "./mobile_list";
export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader/>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <div class="carousel">
                            <Carousel {...settings}>
                                <div><img src="/src/image/carousel_1.jpg"/></div>
                                <div><img src="/src/image/carousel_2.jpg"/></div>
                                <div><img src="/src/image/carousel_3.jpg"/></div>
                                <div><img src="/src/image/carousel_4.jpg"/></div>
                            </Carousel>
                        </div>
                        <MobileList count="20" type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count="20" type="shehui"/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList count="20" type="guonei"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count="20" type="guoji"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList count="20" type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    };
}