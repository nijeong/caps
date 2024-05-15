import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getOutfitForTemperature } from '../Clothes';
import * as Location from 'expo-location';

const ThirdPage = ({ route }) => {
  const { userName } = route.params;
  const [currentTemperature, setCurrentTemperature] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Location permission denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        let latitude = location.coords.latitude;
        let longitude = location.coords.longitude;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${'4d55c2d1351bd6334eb6060cc0811905'}&units=metric`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        setCurrentTemperature(data.main.temp);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    })();
  }, []);

  const recommendOutfit = (temperature) => {
    const outfit = getOutfitForTemperature(temperature);
    if (!outfit) {
      return (
        <View style={styles.outfitContainer}>
          <Text style={styles.outfitTitle}>추천 옷차림 정보가 없습니다.</Text>
        </View>
      );
    }
    return (
      <View style={styles.outfitContainer}>
        <Text style={styles.outfitTitle}>추천 옷차림</Text>
        {Object.keys(outfit).map((key) => (
          <View key={key} style={styles.outfitSection}>
            <Text style={styles.sectionTitle}>{key}</Text>
            {outfit[key].icons.map((icon, index) => (
              <View key={index} style={styles.clothesItem}>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.clothesName}>{outfit[key].names[index]}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{`${userName}님!`}</Text>
      <Text style={styles.welcomeText}>다음과 같은 옷을 추천드려요</Text>
      <View style={styles.divider}></View>
      {currentTemperature !== null && recommendOutfit(currentTemperature)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  outfitContainer: {
    marginTop: 20,
  },
  outfitTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  outfitSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  clothesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  clothesName: {
    fontSize: 16,
  },
});

export default ThirdPage;