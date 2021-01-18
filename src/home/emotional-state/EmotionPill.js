import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function EmotionPill(props) {
    const categoryStyles = {
        color: 'white',
        borderColor: props.categoryColor,
        backgroundColor: props.categoryColor
    };

    return <Text style={[styles.emotName, categoryStyles]}>{props.name}</Text>;
}

const styles = StyleSheet.create({
    emotName: {
        textAlign: 'center',
        fontSize: 18,
        margin: 3,
        paddingTop: 3,
        paddingBottom: 3,
        paddingStart: 10,
        paddingEnd: 10,
        borderRadius: 50,
        borderWidth: 1.5
    }
});
