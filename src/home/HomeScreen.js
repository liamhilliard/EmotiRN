import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MoodSelectorScreen from './MoodSelectorScreen';
import MoodDetailsScreen from './MoodDetailsScreen';

const Stack = createStackNavigator();
StatusBar.setBackgroundColor('#383636');

export default function HomeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MoodSelector"
                component={MoodSelectorScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MoodDetails"
                component={MoodDetailsScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
