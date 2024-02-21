const http = require("http");
const fs = require("fs");
const url = require("url");

const slugify = require("slugify");

const replaceTemplate = require("./modules/replaceTemplate");

// SERVER
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, {lower: true}))
console.log(slugs)

console.log(slugify("Fresh Avacados", { lower: true }));

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(url.parse(req.url, true));

  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const cardsHtml = dataObj.map((el) => {
      return replaceTemplate(tempCard, el);
    });

    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

    res.end(output);
  }
  // Product page
  else if (pathname === "/product") {
    console.log(query);
    const product = dataObj[query.id];
    res.writeHead(200, { "Content-Type": "text/html" });
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
  // API page
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  }
  // Not Found page
  else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "custom-header": "This is custom header",
    });
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running on port 8000");
});
