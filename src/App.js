import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoodScreen from './add-mood/MoodScreen';

const Tab = createBottomTabNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MoodScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default App;
