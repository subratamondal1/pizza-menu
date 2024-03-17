const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
// Object Destructuring
const book = getBook(2);
// const title = book.title;
// const author = book.author;

// title, author with same name must be present inside the book for destructuring to work
console.log("Object Destructuring works on same naming convention");
const { title, author, pages, genres } = book;
console.log(title);
console.log(author);
console.log(pages);
console.log(genres);

// Array Destructuring
// console.log("Array Destructuring works on Index Position Order");
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre);
// console.log(secondaryGenre);

// Rest Operator: stores the rest of the values
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre);
console.log(secondaryGenre);
console.log("otherGenres contains all the rest of the values in it");
console.log(otherGenres);

// Spread Operator: spreads the value into one array or object
const newGenres = ["epic fantasy", ...genres];
console.log(newGenres);

const updatedBook = {
  ...book, // copying all the data of book
  moviePublicationDate: "2001-12-19", // adding new data
  pages: 300, // overriding pages
};
console.log(updatedBook);

// Template Literals
const name = "Subrata Mondal"
console.log(`Welcome! ${name}`)

// Ternary Operator
const pagesRange = pages > 1000 ? "Over Thousand" : "Less Than Thousand"
console.log(pages,pagesRange)

// Arrow Functions
// function getYear(str){
//     return str.split("-")[0]
// }

const getYear = (str) => str.split("-")[0]
const {publicationDate} = book
console.log(publicationDate, getYear(publicationDate));

// Short Circuiting
console.log(true && "subrata"); // returns the second operand if it's true
// It's short circuiting, result is declared based on the first operand only
console.log(false && "subrata"); // returns the first operand if it's false

// It's short circuiting, result is declared based on the first operand only
console.log(true || "subrata"); // returns the first operand if it's true
console.log(false || "subrata"); // returns the second operand if the first operand is false

console.log(true ?? "subrata??") // true
console.log(false ?? "subrata??") // false
console.log(0 ?? "subrata??0") // 0
console.log("" ?? "subrata?? ") // ""
console.log(null ?? "subrata??null") // subrata??null
console.log(undefined ?? "subrata??undefined") // subrata??undefined
