import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Pressable, Animated, Easing} from 'react-native';
import SelectorButton from './SelectorButton';

/*
    TODO: Remove duplication between selected/not selected emotions
    TODO: Refactor to only accept an object for selectorOptions
    TODO: Conditionally render the entire selector view to avoid ugly padding
*/

export default function SelectorGroup({selectorOptions, onUpdate, title, color}) {
    const [isOpen, setIsOpen] = useState(false);
    const animHeight = useRef(new Animated.Value(0)).current;
    const [options] = useState([...selectorOptions]);
    const [values, setValues] = useState({});
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        Animated.timing(animHeight, {
            toValue: isOpen ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false
        }).start();
    }, [animHeight, isOpen]);

    const maxHeight = animHeight.interpolate({
        inputRange: [0, 1],
        outputRange: [6, 300]
    });

    return (
        <View style={styles.container}>
            <Pressable style={[styles.titleContainer, {elevation: isOpen ? 3 : 0, borderBottomStartRadius: isOpen?0:13, borderBottomEndRadius: isOpen?0:13}]} onPress={toggleOpen}>
                <Text style={[styles.titleText, {color}]}>{title}</Text>
                <View style={styles.titleIcon}>
                    <FontAwesomeIcon
                        color={color}
                        size={25}
                        icon={isOpen ? faChevronUp : faChevronDown}
                    />
                </View>
            </Pressable>
            <Animated.View
                style={[
                    styles.childContainer,
                    {maxHeight: isOpen ? maxHeight : 'auto'}
                ]}>
                {options
                    .filter((opt) => values[opt] || isOpen)
                    .map((opt) => {
                        return (
                            <SelectorButton
                                key={opt}
                                name={opt}
                                selectedColor={color}
                                selected={values[opt]}
                                onPress={() => {
                                    const change = {[opt]: !values[opt]};
                                    setValues({...values, ...change});
                                    onUpdate(change);
                                }}
                            />
                        );
                    })}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 3,
        marginBottom: 15,
        borderRadius: 13,
        backgroundColor: 'white'
    },
    titleContainer: {
        flex: 1,
        borderTopStartRadius: 13,
        borderTopEndRadius: 13,
        paddingStart: 10,
        paddingEnd: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-light',
        textAlignVertical: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    titleIcon: {
        justifyContent: 'center'
    },
    childContainer: {
        overflow: 'hidden',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingStart: 5,
        paddingEnd: 5,
        paddingTop: 3,
        paddingBottom: 3
    }
});
