import { Book } from "./book.js";
import { Movie } from "./Movie.js";

class Library{
    constructor(){
        this.media = []
    }
    addItem(item){
        this.media.push(item)
    }
    search(term){
        for(let media of this.media){
            if(media.title.toLowerCase() === term.toLowerCase()){
                return media.getSummary()
            }
        }
    }
    listByGenre(genre){
        for(let media of this.media){
            if(media.genre.toLowerCase() === genre.toLowerCase()){
                return media.getSummary()
            }
        }
    }
}
const lib = new Library();
lib.addItem(new Book("Dune",1965,"Sci-Fi","Frank Herbert",412));
lib.addItem(new Movie("Dune", 2021,"Sci-Fi","Denis Villeneuve", 155));

console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));
