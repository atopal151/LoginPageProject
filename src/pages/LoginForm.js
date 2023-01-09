import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.signInText}> Sign In </Text>
        <Input
          returnKeyType={'next'} //username den passworde geçemk için kullanıcaz
          placeholder="Username"
          autoCapitalize='none'
          onSubmitEditing={() => this.passwordInput.focus()} //sonra  bunu submit al
        />
        <Input
          placeholder="Password"
          autoCapitalize='none'
          InputRef={input => this.passwordInput = input} //otomatik geçmek için kullan
          secureTextEntry={true} />

        <MyButton
          text={'Sign In Now'}
          bgColor={'#1572de'}
          textColor={'#f1f1f1'} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  }
})