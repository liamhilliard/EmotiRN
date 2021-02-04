import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../../styles';

export default function EmotionButton({feelings, icon, onSelect}) {
    const [isSelected, setSelected] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.pressable]}
                onPress={() => {
                    onSelect(!isSelected);
                    setSelected(!isSelected);
                }}
                android_ripple={{color: Colors.backgroundAltRipple}}>
                {icon}
                <Text style={styles.feelings}>{feelings.join(', ')}</Text>
                {onSelect && (
                    <FontAwesomeIcon
                        style={styles.checkContainer}
                        color={Colors.secondary}
                        size={36}
                        icon={isSelected ? faCheckCircle : faCircle}
                    />
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        height: 55,
        marginBottom: 10,
        borderRadius: 100
    },
    pressable: {
        backgroundColor: Colors.backgroundAlt,
        paddingHorizontal: 11,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    feelings: {
        fontFamily: 'Nunito-Bold',
        fontSize: 19,
        paddingStart: 20,
        paddingEnd: 10,
        textAlignVertical: 'center',
        color: Colors.text,
        flex: 1
    },
    checkContainer: {
        alignSelf: 'center'
    }
});
