import { MediaItem } from "./Medialtem.js";

export class Book extends MediaItem{
    constructor(title, year, genre,author, pageCount){
        super(title,year,genre)
        this.author = author
        this.pageCount = pageCount
    }
    getSummary(){
        return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`
    }
}