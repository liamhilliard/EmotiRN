import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function EmotionSelectorGroup({children, title, selectedColor}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color:selectedColor}]}>{title}</Text>

            <View style={[styles.childContainer, {backgroundColor: selectedColor}]}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingStart: 8,
        paddingEnd: 8,
        paddingTop: 8,
        paddingBottom: 10,
        marginTop: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-light',
        marginBottom: 4,
        marginStart: 4,
        color: 'white'
    },
    childContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        padding: 5
    }
});
