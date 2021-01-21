import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Button} from 'react-native';
import EmotionSelectorGroup from './emotion-selector/EmotionSelectorGroup';
import SelectorButton from './emotion-selector/SelectorButton';
import {emotions, groups, colors} from '../core/emotions';

export default function EmotionSelectorScreen({navigation, route}) {
    const [selectedEmotions, setSelectedEmotions] = useState({});

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>How are you{'\n'}feeling?</Text>
            </View>
            {Object.keys(groups).map((group) => {
                return (
                    <EmotionSelectorGroup
                        selectedColor={colors[groups[group]]}
                        key={group}
                        title={group.toLowerCase()}
                        children={Object.keys(emotions)
                            .filter(
                                (emotion) => emotions[emotion] === groups[group]
                            )
                            .map((name) => {
                                return (
                                    <SelectorButton
                                        key={name}
                                        name={name}
                                        selectedColor={colors[groups[group]]}
                                        selected={selectedEmotions[name]}
                                        onPress={() => {
                                            setSelectedEmotions({
                                                ...selectedEmotions,
                                                [name]: !selectedEmotions[name]
                                            });
                                        }}
                                    />
                                );
                            })}
                    />
                );
            })}
            <Button
                title="Continue"
                onPress={() =>
                    navigation.navigate(
                        'Add Emotional State',
                        // eslint-disable-next-line prettier/prettier
                        Object.keys(selectedEmotions)
                    )
                }
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: '4%'
    },
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
