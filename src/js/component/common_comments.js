/**
 * Created by DeLL on 2017/4/21.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    Card,
    notification
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router,Route,Link,browerHistory} from "react-router"
class CommonComments extends React.Comonent{
    constructor(){
        super();
        this.state={
            comments:""
        }
    };
    componentDidMount(){
       var fetchOptions={
           method:"GET"
       };
       fetch(""+this.props.uniquekey,fetchOptions).then(resonse.json()).then(json=>{
          this.setState({comments:json});
       });
    };
    handleSubmit(e){
      e.preventDefault();
        var fetchOptions={
            method:"GET"
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localstorage.userid+"&uniquekey="+this.props.uniquekey,fetchOptions).then(response=>response.json()).then(json=>{
            this.componentDidMount();
        });
    };
    render(){

        const comment=this.state.comments;
        const commentList=comments.length?
            comments.map((item,index)=>(
                <Card key={index} title={comment.UserName} extra={<a href="#">发布{comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            )):"没有评论";
        return(
            <div class="comment">
              <Row>
                  <Col span={24}>
                    {commentlist}
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                         <FormItem label="您的评论">
                             <Input type="textarea" placeholder="随便写" {...getFieldProps("remark",{initialValue:""})}/>
                         </FormItem>
                        <Button type="primary" htmlType="submit">提交评论</Button>
                        <Button type="primary" htmlType="submit" onClick={this.addUserCollection.bind(this)}>收藏</Button>
                    </Form>
                  </Col>
              </Row>
            </div>
        );
    };
}
export default CommonComments =Form.create({})(CommonComments);