const quoteLabel = document.getElementById("quote");
const authorLabel = document.getElementById("author");

const generateQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
    //   .then((data) => console.log(data))
      .then((data) => {
        quoteLabel.innerHTML = data.content;
        authorLabel.innerHTML = `- ${data.author}`
      });
  };

generateQuote();

// https://api.quotable.io/random
