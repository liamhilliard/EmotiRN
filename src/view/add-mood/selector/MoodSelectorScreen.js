import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MoodSelector from './MoodSelector';
import {emotionGroups} from '../../../core/emotions';
import {Button} from '../../../components';
import {Colors} from '../../../styles';

export default function MoodSelectorScreen({navigation}) {
    const [selectedEmotions, setSelectedEmotions] = useState({});
    let hasSelected = false;
    for(const emotion in selectedEmotions){
        selectedEmotions[emotion] && (hasSelected = true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>How are you{'\n'}feeling?</Text>
            <View style={styles.moodContainer}>
                {emotionGroups.map(({id, feelings, color, icon}) => {
                    return (
                        <MoodSelector
                            key={id}
                            feelings={feelings}
                            color={color}
                            icon={icon}
                            onSelect={(isSelected) => {
                                setSelectedEmotions({
                                    ...selectedEmotions,
                                    [id]: isSelected
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
