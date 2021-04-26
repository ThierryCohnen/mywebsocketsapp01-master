const express = require("express");
const http = require("http");
const socketIo = require('socket.io');
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
          origin: "http://127.0.0.1",
          methods: ["GET", "POST"]
        }
  });
  let tick = 0;
let interval;
io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 2000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});
const getApiAndEmit = socket => {
    // const response = {
        
    //     quote = Math.random(),
    //     // date = new Date()
    // }
    // console.log(response)
    // const response = new Date();

    // Emitting a new message. Will be consumed by the client
    // socket.emit("FromAPI", { quote: Math.random()});
    let d = new Date();
    let sec = d.getSeconds();
    let min = d.getMinutes();
    let h= d.getHours();
    let minimum = 130;
    let maximum = 140;

    let randomnumber = ((Math.random() * (maximum - minimum + 1)) + minimum).toFixed(2);
    socket.emit("FromAPI", { quote: randomnumber, date: h + ":" + min + ":" + sec});
    // socket.emit("FromAPI", { quote: Math.random().toFixed(2), date: h + ":" + min + ":" + sec});

};
server.listen(port, () => console.log(`Listening on port ${port}`));