import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './home/HomeScreen'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { create } from 'react-test-renderer';

const Tab = createBottomTabNavigator()
const App = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
  )
}
export default App;
