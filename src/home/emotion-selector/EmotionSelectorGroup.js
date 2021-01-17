import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmotionSelectorButton from './EmotionSelectorButton';

export default function EmotionSelectorGroup(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryTitle}>{props.emotionCategory}</Text>

            <View style={styles.emotionsContainer}>
                {props.emotions.map((name) => {
                    return (
                        <EmotionSelectorButton
                            categoryColor={props.categoryColor}
                            key={name}
                            name={name}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingStart: 10,
        paddingEnd: 20,
        flex: 1,
        alignItems: 'center'
    },
    categoryTitle: {
        fontSize: 42,
        fontFamily: 'sans-serif-light',
        marginBottom: 3
    },
    emotionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 10
    }
});
