fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);
  }).then(res => console.log())

async function getData() {
  let resultFromServer = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(resultFromServer)
  console.log(await resultFromServer.json());
}

getData();
