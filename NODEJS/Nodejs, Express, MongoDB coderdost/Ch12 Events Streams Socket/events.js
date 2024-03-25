const event = require("events");
const fs = require("fs");
const EventEmitter = require("events");
const rs = fs.createReadStream("./data.json");

rs.on("data", (data) => {
  console.log({ data });
});

rs.on("end", (data) => {
  console.log({ data });
});

const eventEmitter = new EventEmitter();

eventEmitter.on("demo", () => console.log("This is demo event"));

setTimeout(() => {
  eventEmitter.emit("demo", { name: "dummy" });
}, 3000);
