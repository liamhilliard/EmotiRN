import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../styles';
import {Mood} from '../../core';
import MoodList from './MoodList';

export default function ViewMoodsScreen() {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        Mood.getByDate(new Date())
            .then((moodsArr) => setMoods(moodsArr))
            .catch((err) => console.log('ViewMoodsScreen::getByDate', err));
    }, []);

    return (
        <ScrollView style={styles.container}>
            {moods.length > 0 &&
                moods.map(([listDate, listContent]) => {
                    const moodList = Object.keys(listContent).map(
                        (key) => listContent[key]
                    );

                    return moodList.length ? (
                        <MoodList
                            key={listDate}
                            date={listDate}
                            moods={moodList}
                        />
                    ) : null;
                })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingHorizontal: 20
    }
});
