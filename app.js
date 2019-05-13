const randomNumber = Math.floor(Math.random() * 101);

let title = document.querySelector('title');
let link = document.getElementById('link');
let author = document.getElementById('author');
let year = document.getElementById('year');
let pages = document.getElementById('pages');

fetch(
  'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json'
)
  .then(res => res.json())
  .then(res => {
    title.innerHTML = `${res[randomNumber].title} | ${
      res[randomNumber].author
    }`;

    link.innerHTML = `<a href="${res[randomNumber].link}" target="_blank">${
      res[randomNumber].title
    }</a>`;
    author.innerHTML = res[randomNumber].author;
    year.innerHTML = `Year - ${res[randomNumber].year}`;
    pages.innerHTML = `Pages - ${res[randomNumber].pages}`;
  });
