import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    text: "Гремит и сверкает, на улицу лучше не суваться",
    gradient: ['#360033', '#182848']
  },
  Drizzle: {
    iconName: 'weather-pouring',
    text: "Немного моросит, возможно дождь усилится",
    gradient: ['#005AA7', '#FFFDE4']
  },
  Rain: {
    iconName: 'weather-rainy',
    text: "На улице дождь, а значит скоро будет радуга",
    gradient: ['#182848', '#005AA7']
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    text: "Валит снежок, идем лепить снеговика",
    gradient: ['#076585', '#fff']
  },
  Fog: {
    iconName: 'weather-fog',
    text: "И не пройти нам этот путь в такой туман",
    gradient: ['#8e9eab', '#eef2f3']
  },
  Clear: {
    iconName: 'weather-sunny',
    text: "Супер погода! Пора гулять!",
    gradient: ['#EDE574', '#E1F5C4']
  },
  Clouds: {
    iconName: 'weather-partly-cloudy',
    text: "Облака - белогривые лошадки",
    gradient: ['#2BC0E4', '#EAECC6']
  }
}

const Weather = ({temp, condition}) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={120} color="white"/>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.condition}>{weatherOptions[condition].text}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Fog', 'Clear', 'Clouds']).isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    fontSize: 80,
    color: 'white'
  },
  condition: {
    color: 'white',
    fontSize: 46,
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  }
})

export default Weather;