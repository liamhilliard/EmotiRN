import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

export default function Button ({title, onPress, style}){
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonTxt}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        elevation: 5,
        backgroundColor: '#4287f5',
        borderRadius: 15
    },
    buttonTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        padding: 3
    }
});