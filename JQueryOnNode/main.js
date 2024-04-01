#!/usr/bin/env node
// Importing the jsdom module

const jsdom = require("jsdom");
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// Creating a window with a document

const dom = new jsdom.JSDOM(`<!DOCTYPE html>
<body>
<h1 class="heading">
    GeeksforGeeks
</h1>
</body>
`);

// Importing the jquery and providing it
// with the window
const jquery = require("jquery")(dom.window);
jquery.support.cors = true;
jquery.ajaxSettings.xhr = function () {
  return new XMLHttpRequest();
};

async function main() {
  const response = await getRandomQuote().then(() => {
    // Appending a paragraph tag to the body
    jquery("body").append("<p>Is a cool Website</p>");
    // Getting the content of the body
    const content = dom.window.document.querySelector("body");
    // Printing the content of the heading and paragraph
    console.log(content.textContent);
  });
}

async function getRandomQuote() {
  jquery
    .ajax({
      url: "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/",
      data: {
        pretty: true,
        context: "display",
        page: 1,
        number: 1,
        fields: "found",
        category: "thought for today",
        type: "post",
        status: "publish",
      },
      type: "GET",
      dataType: "json",
    })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function (json) {
      const count = json.found;
      const rnd = Math.ceil(Math.random() * count);
      getRandomQuoteIdx(rnd);
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function (xhr, status, errorThrown) {
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    })
    // Code to run regardless of success or failure;
    .always(function (xhr, status) {
      console.log("The request is complete!");
    });
}

async function getRandomQuoteIdx(idx) {
  jquery
    .ajax({
      url: "https://public-api.wordpress.com/rest/v1.1/sites/quiteaquote.in/posts/",
      data: {
        pretty: true,
        context: "display",
        page: idx,
        number: 1,
        fields: "title,content",
        category: "thought for today",
        type: "post",
        status: "publish",
      },
      type: "GET",
      dataType: "json",
    })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function (json) {
      const title = json.posts[0].title;
      const content = json.posts[0].content;
      const author = title.split(":", 1)[0];
      const quote = {
        content: content,
        author: author,
      };
      console.log(quote);
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function (xhr, status, errorThrown) {
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    })
    // Code to run regardless of success or failure;
    .always(function (xhr, status) {
      console.log("The request is complete!");
    });
}

main();
