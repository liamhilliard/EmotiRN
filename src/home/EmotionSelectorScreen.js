import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Pressable} from 'react-native';
import SelectorGroup from './emotion-selector/SelectorGroup';
import {emotions, groups} from '../core/emotions';
import Button from './Button';

/*
    TODO: Pass object to SelectorGroup instead of array of names
    TODO: Fix button/AddEmotionalState screen
 */

export default function EmotionSelectorScreen({navigation, route}) {
    const [selected, setSelected] = useState({});

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>How are you feeling?</Text>
            </View>
            {Object.keys(groups).map((groupName) => {
                const currentGroup = groups[groupName];
                const formattedGroupName = groupName.charAt(0) + groupName.slice(1).toLowerCase();
                return (
                    <SelectorGroup
                        color={currentGroup.color}
                        key={groupName}
                        title={formattedGroupName}
                        icon={currentGroup.icon}
                        selectorOptions={emotions
                            .filter((emotion) => emotion.group === currentGroup)
                            .map((emotion) => emotion.name)}
                        onUpdate={(changes) => {
                            setSelected({...selected, ...changes});
                        }}
                    />
                );
            })}
            <Button
                style={styles.button}
                title="Next"
                onPress={() =>
                    navigation.navigate(
                        'Add Emotional State',
                        // eslint-disable-next-line prettier/prettier
                        emotions.filter((emotion) => selected[emotion.name])
                    )
                }
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0eeeb'
    },
    titleContainer: {
        marginTop: 30,
        marginBottom: 20
    },
    titleText: {
        fontFamily: 'Nunito-Regular',
        fontSize: 38,
        textAlign: 'center'
    },
    button: {
        marginTop: 20
    }
});
