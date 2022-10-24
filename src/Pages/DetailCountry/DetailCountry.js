import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import {getCountryData} from '../../api/countryApis';

const DetailCountry = ({route}) => {
  const {countryName} = route.params;

  const [countryData, setCountryData] = useState(null);

  const getCountryDatas = async () => {
    const country = await getCountryData(countryName);
    setCountryData(country);
  };

  useEffect(() => {
    getCountryDatas();
  }, []);

  return (
    <SafeAreaView>
      {countryData && <Text>{countryData[0].name.common}</Text>}
    </SafeAreaView>
  );
};

export default DetailCountry;
