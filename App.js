/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MyRute } from './src/navegations/ValidateRutas';
//ruta de store
import {store} from './src/redux/store';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    //background: 'rgba(42,121,118,255)',
    background: 'transparent',
    //text: '#000',
  },
};



const App = () => {



  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme} >
        <MyRute />
      </NavigationContainer>
    </Provider>
  );
};



export default App;
