import axios from "axios";

export default {

    getResults: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
       // return axios.get("https://www.googleapis.com/books/v1/volumes?q=", { params: { q: query } });
    },
  
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
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