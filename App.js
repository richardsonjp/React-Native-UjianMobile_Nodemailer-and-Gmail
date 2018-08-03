import React, {Component} from 'react';
import {Alert} from 'react-native';
import axios from 'axios'
import { Container, Header, Content, Text, Button,Item, Form, Label, TextInput, Input, Icon} from 'native-base';

class Home extends Component {
  constructor(){
    super();
    this.state={
      input1:'',
      input2:'',
      input3:''
    }
  }
  sendEmail = () =>{
    console.log(this.state.input1)
    console.log(this.state.input2)
    console.log(this.state.input3)

    axios.post('http://192.168.1.28:3210/nodemail',
    {
      input1: this.state.input1,
      input2: this.state.input2,
      input3: this.state.input3
    })
        Alert.alert('Email sudah masuk!'
      )
  }
  render(){
    return(
      <Container>
        <Header>
          <Text style={{color: 'white'}}>Get Ready to receive your email</Text>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>To (email recipient)...</Label>

              <Input
              value={this.state.input1}
              onChangeText={(input)=>this.setState({input1:input})}
              />
              
            </Item>
            <Item floatingLabel>
              <Label>Email Subject...</Label>

              <Input
              value={this.state.input2}
              onChangeText={(input)=>this.setState({input2:input})}
              />

            </Item>
            <Item floatingLabel last>
              <Label>Messages...</Label>

              <Input
              value={this.state.input3}
              onChangeText={(input)=>this.setState({input3:input})}
              />

            </Item>
          </Form>
          <Button onPress={this.sendEmail}style={{width:180, marginTop:50,marginLeft:130}}>
            <Icon name="mail"/>
            <Text>SEND EMAIL</Text>
          </Button>
          <Text style={{marginTop: 100, marginLeft:31}}>email sent by richardsonjayaaputra@gmail.com</Text>
        </Content>
      </Container>
    )
  }
}

export default Home