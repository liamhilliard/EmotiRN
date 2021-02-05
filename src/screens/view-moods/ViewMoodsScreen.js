import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../styles';
import {Mood} from '../../core';
import MoodList from './MoodList';

export default function ViewMoodsScreen() {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        // const toToday = new Date();
        // const fromWeekAgo = new Date(toToday);
        // fromWeekAgo.setDate(toToday.getDate() - 7);

        // Mood.getAllByDate(fromWeekAgo, toToday)
        //     .then((moodsArr) => setMoods(moodsArr.reverse()))
        //     .catch((err) => console.log('ViewMoodsScreen::getByDate', err));
        const dates = [
            '2021-02-04',
            '2021-02-03',
            '2021-02-02',
            '2021-02-01',
            '2021-01-31',
            '2021-01-30',
            '2021-01-29'
        ];
        const moods = [];
        dates.forEach((date) => {
            moods.push([date, {
                [`${date}T06:40:49.000Z`]: {
                    date:`${date}T06:40:49.000Z`,
                    emotions: [1,3,5],
                    description: "incididunt ut labore et reprehenderit in voluptate velit esse cillum dolore cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    cause: "Lorem ipsum dolor sit amet, consecteturr in reprehenderit in voluptate veat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                [`${date}T08:40:49.000Z`]: {
                    date:`${date}T08:40:49.000Z`,
                    emotions: [3,5],
                    description: "Le et dolore magna aliqua. Ut encillum dolore eu fugiat nulla pariatur. Excepteur sint mollit anim id est laborum.",
                    cause: "Lorem ipsum dolomollit anim id est laborum."
                },
                [`${date}T12:40:49.000Z`]: {
                    date:`${date}T12:40:49.000Z`,
                    emotions: [5],
                    description: "Lorem ipsum dolor sit amet, consecte pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    cause: "Lori sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                [`${date}T16:40:49.000Z`]: {
                    date:`${date}T16:40:49.000Z`,
                    emotions: [2],
                    description: "a. Ut enim ad mieprehenderit in voluptate velit esse c eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    cause: "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            }]);
        });

        setMoods(moods);
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
