import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../redux/store';

import HomeScreen from '../screens/HomeScreen';
import HotelDetailScreen from '../components/HotelDetail';

const HotelStack = createStackNavigator();

const MyStack = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <HotelStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <HotelStack.Screen name="Home" component={HomeScreen} />
                <HotelStack.Screen name="HotelDetail" component={HotelDetailScreen} />
            </HotelStack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

export default MyStack;