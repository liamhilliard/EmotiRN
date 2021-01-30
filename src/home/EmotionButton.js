import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable, PixelRatio} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function EmotionButton({feelings, color, icon, onSelect}) {
    const [isSelected, setSelected] = useState(false);

    return (
        <Pressable
            style={[styles.container]}
            onPress={() => {
                // onSelect();
                setSelected(!isSelected);
            }}>
            <Text style={styles.feelings}>{feelings.join(', ')}</Text>
            <View style={styles.icon}>
                <FontAwesomeIcon color={isSelected ? color : 'lightgray'} size={32} icon={icon} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'lightgray',
        paddingStart: 30,
        paddingEnd: 30,
        marginBottom: 30,
        // elevation: 5,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    icon: {
        // backgroundColor: '#68967d'
    },
    feelings: {
        fontFamily: 'Nunito-Regular',
        fontSize: 20,
        textAlignVertical: 'center',
        color: '#383636',
        // backgroundColor: '#94928b',
        flex: 1,
        flexDirection: 'row'
    }
});
