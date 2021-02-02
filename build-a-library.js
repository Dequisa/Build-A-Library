let readline = require('readline-sync')



class Media {
    constructor (title){
      this._title = title;
      this._isCheckedOut = isCheckedOut;
      this._rating = rating;
    }
    get title() {
      return this._title
    }
    get isCheckedOut () {
      return this._isCheckedOut
    }
    get rating() {
      return this._rating
    }
  
    set isCheckedOut (newIsCheckedOut){
      this._isCheckedOut = newIsCheckedOut;
    }
  
  getAverageRating() {
    let sum = this.ratings.reduce((currsum,rating)=>{
      currsum + rating
    },0)
   return sum/ratings.length
  }
  toggleCheckOutStatus() {
    return toggleCheckOutStatus? false : true
  }
  addRating(newRate) {
    ratings.push(newRate)
  }
  }
  
  class Book extends Media {
    constructor(title,author,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author
    }
    get pages() {
      return this._pages
    }
  }
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544)
  
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.toggleCheckOutStatus)
  class Movie extends Media {
    constructor(title,director,runTime){
      super(title);
      super(isCheckedOut);
      super(rating);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director (){
      return this._director;
    }
  
    get runTime () {
      return this._runTime;
    }
  
  }
  
  class CD extends Media {
    constructor(title,isCheckedOut,rating,artist,songs){
      super(title);
      super(isCheckedOut);
      super(rating);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist (){
      return this._artist;
    }
  get songs () {
    return this._songs
  }
  
  }