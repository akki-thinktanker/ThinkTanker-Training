// async function getData(){
//   let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts")
//   let data = await resultFromServer.json()
//   console.log(data)
// }

// getData()

const data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res)
  .then((data) => data.json());
console.log(data);
