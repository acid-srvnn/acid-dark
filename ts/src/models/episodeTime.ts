export class EpisodeTime {
    season: number = 0;
    episode: number = 0;
    frame: number = 0;
    number: number = 0;
    constructor(season: number, episode: number, frame: number) {
        this.season = season;
        this.episode = episode;
        this.frame = frame;
        this.number = season * 1000000 + episode * 1000 + frame;
    }
}