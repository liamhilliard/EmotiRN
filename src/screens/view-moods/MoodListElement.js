import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Mood} from '../../core';
import {Colors} from '../../styles';
import {Icons} from '../../components';

export default function MoodListElement({mood}) {
    const timeString = new Date(mood.date)
        .toLocaleTimeString()
        .replace(/:\d{2}$/, '');

    return (
        <View style={styles.container}>
            {/* <Text style={styles.description}>{mood.description}</Text> */}
            <View style={styles.emotions}>
                {Mood.EMOTIONS.filter(({id}) => mood.emotions.includes(id)).map(
                    ({name}) => (
                        <View style={styles.emotionIcon} key={name}>
                            {Icons[name](25)}
                        </View>
                    )
                )}
            </View>

            <Text style={styles.time}>{timeString}</Text>
 
            <View style={styles.textContainer}>
                <Text>Description</Text>
                <Text>{mood.description}</Text>
                <Text>Cause</Text>
                <Text>{mood.cause}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundAlt,
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 15
    },
    time: {
        fontFamily: 'Nunito-Bold',
        color: Colors.text,
        fontSize: 16
    },
    description: {

    },
    emotions: {
        flex: 1,
        flexDirection: 'row'
    },
    emotionIcon: {
        padding: 2
    }
});
