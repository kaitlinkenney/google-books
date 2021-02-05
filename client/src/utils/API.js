import axios from "axios";

export default {

    //Gets api results that match the user's searched book
    getResults: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
  
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};







// getResults: function () {
  
//         return new Promise((resolve, reject) => {
//           axios
//             .get("https://api.github.com/orgs/github/public_members")
//             .then(res => {
//               const books = res.data;
//               const results = books.map(book => {
//                 return {
//                   title: book.volumeInfo.title,
//                   author: book.volumeInfo.authors,
//                   description: book.volumeInfo.description,
//                   image: book.volumeInfo.imageLinks.thumbnail,
//                   link: book.volumeInfo.previewLink
//                 };
//               });
//               resolve(results);
//             })
//             .catch(err => reject(err));
//         });
    
// },