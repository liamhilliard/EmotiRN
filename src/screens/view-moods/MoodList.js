import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MoodListElement from './MoodListElement';
import {Colors} from '../../styles';

export default function MoodList({moods, date}) {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{formatDate(date)}</Text>
            {moods.map((mood) => (
                <MoodListElement key={mood.date} mood={mood} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 10
    },
    date: {
        fontFamily: 'Nunito-Bold',
        fontSize: 19,
        color: Colors.text,
        backgroundColor: Colors.backgroundAlt,
        padding: 5,
        borderRadius: 5,
        paddingStart: 10
    }
});

function formatDate(dateToFormat) {
    // eslint-disable-next-line prettier/prettier
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
    // eslint-disable-next-line prettier/prettier
    const weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    const dateObj = new Date(dateToFormat);

    const weekday = weekdays[dateObj.getDay()];
    const date = dateObj.getDate();
    const month = months[dateObj.getMonth()];

    return `${weekday} ${date} ${month}`;
}