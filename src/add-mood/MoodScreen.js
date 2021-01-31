import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MoodSelectorScreen from './MoodSelectorScreen';
import MoodDetailsScreen from './MoodDetailsScreen';
import {Colors} from '../styles';

const Stack = createStackNavigator();
StatusBar.setBackgroundColor(Colors.text);

export default function MoodScreen() {
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
