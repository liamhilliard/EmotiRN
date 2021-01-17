import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

export default function EmotionSelectorButton(props) {
    return (
        <Pressable>
            <Text style={styles.emotName}>{props.name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    emotName: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        margin: 3,
        paddingTop: 3,
        paddingBottom: 3,
        paddingStart: 10,
        paddingEnd: 10,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2
    }
});
