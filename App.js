import React, { Component } from 'react';
import { View, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Root, ActionSheet } from 'native-base';
import AndroidClock from 'react-native-alarm-clock'

const height = Dimensions.get('window').height - 80;

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      time: new Date()
    }


    this.calculateTimes = this.calculateTimes.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
    this.renderTimes = this.renderTimes.bind(this);
    this.renderNow = this.renderNow.bind(this);

    setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }

  calculateTimes() {
    let time = this.state.time;
    
    let op1 = new Date(time.getTime() + 32400000 + 1800000);
    let op2 = new Date(time.getTime() + 27000000 + 1800000);
    let op3 = new Date(time.getTime() + 21600000 + 1800000);
    let op4 = new Date(time.getTime() + 16200000 + 1800000);

    let times = {
      now: {
        hours: time.getHours(),
        minutes: ('0'+time.getMinutes()).slice(-2),
        seconds: ('0'+time.getSeconds()).slice(-2)
      },
      op1: {
        date: op1,
        hours: op1.getHours(),
        minutes: ('0'+op1.getMinutes()).slice(-2),
        seconds: ('0'+op1.getSeconds()).slice(-2)
      },
      op2: {
        date: op2,
        hours: op2.getHours(),
        minutes: ('0'+op2.getMinutes()).slice(-2),
        seconds: ('0'+op2.getSeconds()).slice(-2)
      },
      op3: {
        date: op3,
        hours: op3.getHours(),
        minutes: ('0'+op3.getMinutes()).slice(-2),
        seconds: ('0'+op3.getSeconds()).slice(-2)
      },
      op4: {
        date: op4,
        hours: op4.getHours(),
        minutes: ('0'+op4.getMinutes()).slice(-2),
        seconds: ('0'+op4.getSeconds()).slice(-2)
      }
    }
    
    return times;

  }

  setAlarm(date) {
    let time = new Date(date.date);
    AndroidClock.createAlarm('iDream1', time.getHours(), time.getMinutes());
  }

  renderNow(times) {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 60, color: 'white', fontWeight: 'bold'}} >{times.now.hours}:{times.now.minutes}:{times.now.seconds}</Text><Text style={{color: 'white', fontSize: 40}} > hrs.</Text>
      </View>
    )
  }

  renderTimes() {
    let times = this.calculateTimes();

    return (
      <View style={{height, alignSelf: 'center'}}>
        {this.renderNow(times)}
        <Text>{'\n'}</Text>
        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Possible waking times:</Text>

        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setAlarm(times.op1)} >
          <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}} >{times.op1.hours}:{times.op1.minutes}:{times.op1.seconds}</Text><Text style={{color: 'white', fontSize: 20}} > hrs.</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>9 hours of sleep, 6 cycles</Text>

        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setAlarm(times.op2)} >
          <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}} >{times.op2.hours}:{times.op2.minutes}:{times.op2.seconds}</Text><Text style={{color: 'white', fontSize: 20}} > hrs.</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>7.5 hours of sleep, 5 cycles</Text>

        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setAlarm(times.op3)} >
          <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}} >{times.op3.hours}:{times.op3.minutes}:{times.op3.seconds}</Text><Text style={{color: 'white', fontSize: 20}} > hrs.</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>6 hours of sleep, 4 cycles</Text>
        
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setAlarm(times.op4)} >
          <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}} >{times.op4.hours}:{times.op4.minutes}:{times.op4.seconds}</Text><Text style={{color: 'white', fontSize: 20}} > hrs.</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>4.5 hours of sleep, 3 cycles</Text>
        

      </View>
    )
  }

  render() {
    return (
      <Root>
        <Container style={{height}}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>iDream</Title>
            </Body>
            <Right />
          </Header>
          <Content style={{height}} >
            <Image source={require('./resources/background.png')} resizeMode='cover' style={{height: '100%', width: '100%', position: 'absolute'}} />
            {this.renderTimes()}
          </Content>
        </Container>
      </Root>
    );
  }
}