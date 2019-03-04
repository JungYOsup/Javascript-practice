import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {LinearGradient} from expo;




const WeatherCases = {
  Rain : {
    colors: ["#00C6FB", "#005BEA"],

    title: "Raining like a MF",

    subtitle: "For more info look outside",

    icon: "weather-rainy"

  }
}



function Weather({ weatherName, temp }) {
  return (
      <LinearGradient>
          <Weather_Image weatherName = {weatherName} temp={temp}/>
          <Weather_content weatherName = {weatherName}/>
      </LinearGradient>
  );
}







function Weather_Image({weatherName,temp }) {
  return <View><MaterialCommunityIcons color="white" size={144} name={WeatherCases[weatherName].icon} /><Text>{temp}</Text></View>;
}

function Weather_content({weatherName}){
  return <View><Text>{WeatherCases[weatherName].title}</Text><Text>{WeatherCases[weatherName].subtitle}</Text></View>

}

function Wearther_title() {}

const styles = StyleSheet.create({});

export default Weather;
