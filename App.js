import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';

const apiKey = 'a80d8057172d149435da58802d1031f1';

class App extends React.Component {
  
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
    this.setState({
      isLoading: false, 
      temp: temp, 
      condition: weather[0].main
    });
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch(error) {
      Alert.alert('Не могу определить местоположение', 'Очень грустно :(');
    }
  }

  componentDidMount() {
    this.getLocation();
  }


  render() {
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
    );
  } 
}

export default App;




