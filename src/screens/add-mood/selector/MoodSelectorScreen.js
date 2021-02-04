import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MoodSelector from './MoodSelector';
import {Button, Icons} from '../../../components';
import {Colors} from '../../../styles';
import {Mood} from '../../../core';

export default function MoodSelectorScreen({navigation}) {
    const [selectedEmotions, setSelectedEmotions] = useState({});
    let hasSelected = false;
    for (const emotion in selectedEmotions) {
        selectedEmotions[emotion] && (hasSelected = true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>How are you{'\n'}feeling?</Text>
            <View>
                {Mood.EMOTIONS.map(({name, feelings}) => {
                    return (
                        <MoodSelector
                            key={name}
                            feelings={feelings}
                            icon={Icons[name]}
                            onSelect={(isSelected) => {
                                setSelectedEmotions({
                                    ...selectedEmotions,
                                    [name]: isSelected
                                });
                            }}
                        />
                    );
                })}
            </View>
            <Button
                disabled={!hasSelected}
                title="Next"
                onPress={() => {
                    navigation.navigate('MoodDetails', selectedEmotions);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20
    },
    titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 36,
        textAlign: 'center',
        color: Colors.text
    }
});
