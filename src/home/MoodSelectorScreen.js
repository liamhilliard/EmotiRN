import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EmotionButton from './EmotionButton';
import {emotionGroups} from '../core/emotions';
import Button from './Button';

export default function MoodSelectorScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>How are you{'\n'}feeling?</Text>
            <View style={styles.moodContainer}>
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
                    );
                })}
            </View>
            <View style={styles.btnContainer}>
                <Button
                    backgroundColor="#734e44"
                    rippleColor="#bfab8e"
                    color="#ede2d1"
                    title="Next"
                    onPress={() => {}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ede2d1',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20
    },
    titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 36,
        textAlign: 'center',
        color: '#383636'
    },
    btnContainer: {
        marginHorizontal: '30%'
    }
});
