import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import EmotionSelectorGroup from './emotion-selector/EmotionSelectorGroup';
import {emotionCategories} from '../core/emotions';

const colors = {
    angry: 'red',
    disgusted: 'purple',
    afraid: 'darkorange',
    happy: 'yellow',
    sad: 'lightblue',
    surprised: 'pink'
};

export function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>How are you{'\n'}feeling?</Text>
            </View>
            {Object.keys(emotionCategories).map((category) => {
                return (
                    <EmotionSelectorGroup
                        key={category}
                        style={{backgroundColor: colors[category]}}
                        emotionCategory={category}
                        emotions={emotionCategories[category]}
                    />
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    titleText: {
        fontFamily: 'sans-serif-light',
        fontSize: 50,
        textAlign: 'center'
    }
});
