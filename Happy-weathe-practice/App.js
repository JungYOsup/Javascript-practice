import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./Weather";
const API_KEY = "8042367a40d903407a2eee2c0cfa759a";

class App extends Component {
  state = {
    isLoaded: false,
    temperature: null,
    name: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    });
  }

  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
      });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;

    return (
      <View styles={styles.container}>
        {isLoaded ? (
          <Weather weatherName={name} temp={temperature} />
        ) : (
          <Loaded_Weather />
        )}
      </View>
    );
  }
}

function Loaded_Weather() {
  return (
    <View style={styles.loaded_weather}>
      <Text style={styles.loaded_text}>Getting the Happy weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF5A0"
  },
  loaded_weather: {
    flex: 1,
    justifyConetent: "end",
    backgroundColor: "#FEF5A0"
  },
  loaded_text: {
    flex: 1,
    fontSize: 30
  }
});

export default App;
