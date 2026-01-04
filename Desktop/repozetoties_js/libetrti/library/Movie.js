import { MediaItem } from "./Medialtem.js"

export class Movie extends MediaItem{
    constructor( title, year, genre,director, durationMinutes){
        super( title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes
    }
    getSummary(){
        return `Movie: ${this.title} directed by ${this.director}, ${this.durationMinutes} min`
    }
}