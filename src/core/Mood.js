import EMOTIONS from './Emotions';

export default class Mood {
    static EMOTIONS = EMOTIONS;

    constructor(emotions, description, cause) {
        this.emotions = emotions;
        this.description = description;
        this.cause = cause;
    }
}
