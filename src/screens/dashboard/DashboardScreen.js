import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
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
        <ScrollView style={styles.container}>
            {moods.map((mood) => (
                <Text key={mood.date}>{JSON.stringify(mood)}</Text>
            ))}
            <Text>Hello Dashboard</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20
    }
});
