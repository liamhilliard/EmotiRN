import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function EmotionSelectorGroup({children, title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.childContainer}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingStart: 10,
        paddingEnd: 10
    },
    title: {
        fontSize: 42,
        fontFamily: 'sans-serif-light',
        marginBottom: 3
    },
    childContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    }
});
