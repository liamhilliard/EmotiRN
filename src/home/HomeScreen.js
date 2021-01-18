import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Button} from 'react-native';
import EmotionSelectorGroup from './emotion-selector/EmotionSelectorGroup';
import {emotions, groups} from '../core/emotions';

const colors = {
    [groups.ANGRY]: '#f44336',
    [groups.AFRAID]: '#74ac33',
    [groups.DISGUSTED]: '#a13cb2',
    [groups.HAPPY]: '#f5a620',
    [groups.SAD]: '#2f97ea',
    [groups.SURPRISED]: '#678a9a'
};

export function HomeScreen() {
    const [selectedEmotions, setSelectedEmotions] = useState({});
    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>How are you{'\n'}feeling?</Text>
            </View>
            {Object.keys(groups).map((group) => {
                return (
                    <EmotionSelectorGroup
                        key={groups[group]}
                        categoryColor={colors[groups[group]]}
                        emotionCategory={group.toLowerCase()}
                        emotions={Object.keys(emotions).filter(
                            (emotion) => emotions[emotion] === groups[group]
                        )}
                        onSelect={(emotion, isSelected) => {
                            setSelectedEmotions({
                                ...selectedEmotions,
                                [emotion]: isSelected
                            });
                        }}
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
