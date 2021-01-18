import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Button} from 'react-native';
import EmotionSelectorGroup from './EmotionSelectorGroup';
import {emotions, groups, colors} from '../../core/emotions';

export default function EmotionSelectorScreen({navigation, route}) {
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
            <Button
                title="Continue"
                onPress={() =>
                    navigation.navigate(
                        'Add Emotional State',
                        // eslint-disable-next-line prettier/prettier
                        {...selectedEmotions}
                    )
                }>
                Continue
            </Button>
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
