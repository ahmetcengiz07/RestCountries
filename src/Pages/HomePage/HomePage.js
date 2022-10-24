import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {getAllData} from '../../api/countryApis';

import styles from '../HomePage/HomePage.style';

const HomePage = () => {
  const [countries, setCountries] = useState(null);
  const navigation = useNavigation(); //fonksyion içine {navigation} prop olarak da yazılabilir

  const getCountries = async () => {
    const data = await getAllData();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const renderFlags = ({item}) => {
    const flagPng = item.flags.png;
    const countryName = item.name.common;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailCountry', {
            countryName: countryName,
          })
        }>
        <ImageBackground
          style={styles.countryFlag}
          source={{uri: flagPng}}
          resizeMode="contain">
          <Text style={styles.countryName}>{countryName}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <FlatList data={countries} renderItem={renderFlags} />
    </SafeAreaView>
  );
};

export default HomePage;
