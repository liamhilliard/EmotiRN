import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MoodSelector from '../components/MoodSelector';
import {emotionGroups} from '../core/emotions';
import Button from '../components/Button';
import {Colors} from '../styles';

export default function MoodSelectorScreen({navigation}) {
    const [selectedEmotions, setSelectedEmotions] = useState({});

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
            <View style={styles.btnContainer}>
                <Button
                    title="Next"
                    onPress={() => {
                        navigation.navigate('MoodDetails', selectedEmotions);
                    }}
                />
            </View>
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
    },
    btnContainer: {
        marginHorizontal: '30%'
    }
});
