/**
 * Created by DeLL on 2017/4/17.
 */
import React from "React";
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import PCNewsContainer from "./pc_newscontainer";
export default class PCIndex extends React.Component{
    render(){
        return (
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter/>
            </div>
        );
    };

}