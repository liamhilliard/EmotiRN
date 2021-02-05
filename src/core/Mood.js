import AsyncStorage from '@react-native-async-storage/async-storage';
import EMOTIONS from './Emotions';

export default class Mood {
    static EMOTIONS = EMOTIONS;
    date = new Date().toISOString();

    constructor(emotions, description, cause) {
        this.emotions = emotions;
        this.description = description;
        this.cause = cause;
    }

    static getAllByDate(fromDate, toDate) {
        return getMoodsByDate(fromDate, toDate);
    }

    save() {
        return mergeMoods(this);
    }
}

function getYmdDate(date) {
    const dateString = (typeof date === 'string') ? date : new Date(date).toISOString();
    return dateString.split('T')[0];
}

async function mergeMoods(mood) {
    const storeKey = getYmdDate(mood.date);
    try {
        await AsyncStorage.mergeItem(
            storeKey,
            JSON.stringify({[mood.date]: mood})
        );
    } catch (err) {
        // toast error?
        console.log('Mood::mergeMoods', err);
    }
}

async function getMoodsByDate(fromDate, toDate) {
    let _fromDate = new Date(fromDate);
    let _toDate = toDate ? new Date(toDate) : _fromDate;

    // get all dates in yyyy-mm-dd format between _fromDate and _toDate to query by
    let dateRange = [];
    do {
        dateRange.push(getYmdDate(_fromDate));
        _fromDate.setDate(_fromDate.getDate() + 1);
        console.log('while', _fromDate, '==>', _toDate);
    } while (getYmdDate(_fromDate) < getYmdDate(_toDate));
    console.log(dateRange);

    try {
        // multiGet() returns an array of k/v pairs which we map and parse
        // e.g.: [ ["key", "jsonValue"], ["key", "jsonValue"] ]
        const moodGroups = await AsyncStorage.multiGet(dateRange);
        console.log(moodGroups);
        return moodGroups.map(([key, value]) => [
            key,
            value === null ? [] : JSON.parse(value)
        ]);
    } catch (err) {
        // toast error?
        console.log('Mood::getMoodsByDate', err);
        return [];
    }
}
