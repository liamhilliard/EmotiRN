import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, StyleSheet} from 'react-native';
import AddMoodScreen from './add-mood/AddMoodScreen';
import ViewMoodsScreen from './view-moods/ViewMoodsScreen';
import {Colors} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

StatusBar.setBackgroundColor(Colors.secondaryAlt);

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeBackgroundColor: Colors.secondaryAlt,
    inactiveBackgroundColor: Colors.secondaryAlt
};

const screenOptions = ({route}) => ({
    tabBarIcon: () => {
        return (
            <FontAwesomeIcon
                color="lightgray"
                size={15}
                icon={faArchive}
            />
        );
    }
});

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={tabBarOptions}
                screenOptions={screenOptions}>
                <Tab.Screen name="AddMood" component={AddMoodScreen} />
                <Tab.Screen name="ViewMood" component={ViewMoodsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
