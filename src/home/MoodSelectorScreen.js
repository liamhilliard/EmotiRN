import React from 'react';
import {StyleSheet, View, ScrollView, Text, Pressable} from 'react-native';
import EmotionButton from './EmotionButton';
import {emotionGroups} from '../core/emotions';

export default function MoodSelectorScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>How are you feeling?</Text>
            </View>
            {emotionGroups.map(({id, feelings, color, icon}) => {
                return (
                    <EmotionButton
                        key={id}
                        feelings={feelings}
                        color={color}
                        icon={icon}
                        onPress={() => {
                            // something
                        }}
                    />
                    // <Text style={{backgroundColor: group.color}}>{JSON.stringify(group)}</Text>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    titleContainer: {
        marginTop: 50,
        marginBottom: 30
    },
    titleText: {
        fontFamily: 'Nunito-Regular',
        fontSize: 48,
        textAlign: 'center',
        color: '#383636'
    }
});
