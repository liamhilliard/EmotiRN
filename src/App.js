import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddMoodScreen} from './screens/add-mood';
import {ViewMoodsScreen} from './screens/view-moods';
import {Colors} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList, faPlusCircle, faFile} from '@fortawesome/free-solid-svg-icons';

StatusBar.setBackgroundColor(Colors.secondaryAlt);

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={tabBarOptions}
                screenOptions={screenOptions}
                initialRouteName={routes.addMood.name}>
                <Tab.Screen name={routes.addMood.name} component={routes.addMood.screen} />
                <Tab.Screen name={routes.viewMoods.name} component={routes.viewMoods.screen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const tabBarOptions = {
    labelStyle: {
        marginBottom: 5
    },
    keyboardHidesTabBar: true,
    activeBackgroundColor: Colors.backgroundAlt,
    inactiveBackgroundColor: Colors.backgroundAlt,
    activeTintColor: Colors.secondary,
    inactiveTintColor: Colors.backgroundAltRipple
};

const screenOptions = ({route}) => ({
    unmountOnBlur: true,
    tabBarIcon: ({color}) => {
        let icon;
        switch (route.name) {
            case routes.addMood.name:
                icon = faPlusCircle;
                break;
            case routes.viewMoods.name:
                icon = faList;
                break;
            default:
                icon = faFile;
                break;
        }

        return <FontAwesomeIcon color={color} size={20} icon={icon} />;
    }
});

const routes = {
    addMood: {name: 'AddMood', screen: AddMoodScreen},
    viewMoods: {name: 'ViewMoods', screen: ViewMoodsScreen}
};
