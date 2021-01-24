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
    container: {
        backgroundColor: '#f0eeeb'
    },
    titleContainer: {
        marginTop: 30,
        marginStart: 15,
        marginEnd: 15,
        marginBottom: 30,
        justifyContent: 'center',
        flex: 1
    },
    titleText: {
        fontFamily: 'sans-serif',
        fontSize: 38
    }
});
