import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { bgColor,textColor} = this.props;
    return (

      <TouchableOpacity style={[styles.button,
      { backgroundColor: bgColor, }]}>
        <Text style={[{color: textColor}, styles.text]}> {this.props.text} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    paddingVertical:15,
    paddingHorizontal:10,
    borderRadius:3,
    alignItems:'center',
    borderRadius:10
  },
  text:{
    fontSize:14
  }
});
