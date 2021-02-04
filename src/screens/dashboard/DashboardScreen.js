import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../styles';
import {Mood} from '../../core';

export default function DashboardScreen() {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        Mood.getByDate(new Date())
            .then((moodsArr) => setMoods(moodsArr))
            .catch((err) => console.log('DashboardScreen::getByDate', err));
    }, []);

    return (
        <View style={styles.container}>
            <Text>Hello Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
        height: '100%'
    }
});
