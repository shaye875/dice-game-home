export class MediaItem{
    constructor(title,year,genre){
        this.title = title
        this.year = year
        this.genre = genre
    }
    getSummary(){
        return `the title is ${this.title} the year is ${this.year} the genre is ${this.genre}`
    }
}