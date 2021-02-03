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

    static getByDate(date) {
        return getMoodsByDate(date);
    }

    save() {
        return mergeMoods(this);
    }
}

function mergeMoods(mood) {
    const storeKey = mood.date.split('T')[0];
    return AsyncStorage.mergeItem(storeKey, JSON.stringify({[mood.date]: mood}));
}

async function getMoodsByDate(date) {
    const key = new Date(date).toISOString().split('T')[0];
    return await AsyncStorage.getItem(key)
        .then((obj) => {
            if (!obj) {
                return [];
            } else {
                const moodsMap = JSON.parse(obj);
                return Object.keys(moodsMap).map((dateTime) => {
                    return moodsMap[dateTime];
                });
            }
        })
        .catch((err) => console.log('Mood::getMoodsByDate', err));
}
