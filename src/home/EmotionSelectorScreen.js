import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Button} from 'react-native';
import SelectorGroup from './emotion-selector/SelectorGroup';
import {emotions, groups} from '../core/emotions';

/*
    TODO: Pass object to SelectorGroup instead of array of names
    TODO: Fix button/AddEmotionalState screen
 */

export default function EmotionSelectorScreen({navigation, route}) {
    const [selected, setSelected] = useState({});

    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>How do you feel?</Text>
            </View>
            {Object.keys(groups).map((groupName) => {
                const currentGroup = groups[groupName];
                return (
                    <SelectorGroup
                        color={currentGroup.color}
                        key={groupName}
                        title={groupName.toLowerCase()}
                        selectorOptions={emotions
                            .filter((emotion) => emotion.group === currentGroup)
                            .map((emotion) => emotion.name)}
                        onUpdate={(changes) => {
                            setSelected({...selected, ...changes});
                        }}
                    />
                );
            })}
            {/* <Button
                title="Continue"
                onPress={() =>
                    navigation.navigate(
                        'Add Emotional State',
                        // eslint-disable-next-line prettier/prettier
                        Object.keys(selected)
                    )
                }
            /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        marginBottom: 15,
        justifyContent: 'center',
        flex: 1
    },
    titleText: {
        fontFamily: 'sans-serif',
        fontSize: 34
    }
});
