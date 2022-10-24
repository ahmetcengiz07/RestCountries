                  TEK SAYFADA REDUX ÖRNEĞİ
// /* eslint-disable react-native/no-inline-styles */
// import {View, Text, SafeAreaView, Button} from 'react-native';
// import React from 'react';
// import {createStore} from 'redux';
// import {Provider, useSelector, useDispatch} from 'react-redux';

// //useSelector statelere erişmemize olanak sağlar
// //useDispatch  reducerlara erişmemizi sağlar.
// const initialState = {
//   //global olarak tanımlanan statelerin tanımlandığı ve ilk değerlerini aldığı yer
//   counter: 0,
// };

// function reducers(state, action)  {
//   switch (action.type) {
//     case 'UPDATE_COUNTER': //KOD ADI
//       return {...state, counter: state.counter + 1}; //statei gönder ama state içindeki counter ı şu şekilde güncelle diyoruz

//     default:
//       return state;
//   }
// }
// //state : Global tutulan stateler
// //action: fonksiyonları tetiklerken gönderilen parametre (typle alır)

// const App = () => {
//   return (
//     <Provider store={createStore(reducers, initialState)}>
//       <SafeAreaView style={{flex: 1}}>
//         <First />
//         <Second />
//       </SafeAreaView>
//     </Provider>
//   );
// };

// const First = () => {
//   const counter = useSelector(selector => selector.counter); //selector initial statein kendisidir (global statelerin tutulduğu obje )
//   const dispatch = useDispatch(); //reducerları tetiklemek için kullandık

//   const handleUpdate = () => {
//     dispatch({type: 'UPDATE_COUNTER'});
//   };
//   return (
//     <View style={{flex: 1, backgroundColor: 'yellow'}}>
//       <Text>First :{counter} </Text>
//       <Button title="UpdateCounter" onPress={handleUpdate} />
//     </View>
//   );
// };

// const Second = () => {
//   const counter = useSelector(selector => selector.counter);
//   return (
//     <View style={{flex: 1, backgroundColor: 'red'}}>
//       <Text>Second :{counter} </Text>
//     </View>
//   );
// };
// export default App;
