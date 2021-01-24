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

export default function SelectorGroup({selectorOptions, onUpdate, title, color, icon}) {
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
            <Pressable
                style={[
                    styles.titleContainer,
                    {
                        elevation: isOpen ? 3 : 0,
                        borderBottomStartRadius: isOpen ? 0 : 13,
                        borderBottomEndRadius: isOpen ? 0 : 13
                    }
                ]}
                onPress={toggleOpen}>
                <View style={styles.title}>
                    <View style={styles.titleIcon}>
                        <FontAwesomeIcon color={color} size={32} icon={icon} />
                    </View>
                    <Text style={[styles.titleText, {color}]}>{title}</Text>
                </View>
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
        marginStart: 15,
        marginEnd: 15,
        marginBottom: 15,
        borderRadius: 13,
        backgroundColor: 'white'
    },
    titleContainer: {
        borderTopStartRadius: 13,
        borderTopEndRadius: 13,
        paddingStart: 8,
        paddingEnd: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    title: {
        flex: 1,
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        marginStart: 10,
        marginTop: 3
    },
    titleIcon: {
        justifyContent: 'center',
        marginTop: 6
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
