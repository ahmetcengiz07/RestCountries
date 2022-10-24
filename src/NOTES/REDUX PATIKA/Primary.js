import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const Primary = () => {
  const [text, setText] = useState(' ');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({type: 'ADD_NAME', payload: {name: text}});//Dispatch type ve gönderilmek istenen parametleri alır
  };
  return (
    <View>
      <Text>Primary</Text>
      <View style={{borderWidth: 2, padding: 5, margin: 10}}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="İsim giriniz..."
        />
      </View>
      <Button title="ekle" onPress={handleAdd} />
    </View>
  );
};

export default Primary;
