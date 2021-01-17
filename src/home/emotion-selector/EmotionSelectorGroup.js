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
                            styles={{
                                selectorPressColor: props.selectorPressColor
                            }}
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
        paddingEnd: 20
    },
    categoryTitle: {
        fontSize: 28
    },
    emotionsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});
