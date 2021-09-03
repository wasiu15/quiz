const { SSL_OP_NO_QUERY_MTU } = require("constants");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 7000;
app.use(express.static("public"));
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

// const server = require("http").createServer(app);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//   },
// });

var listOfBookings = [
  "LSF23",
  "COUA2",
  "SLDF2",
  "IWYW6",
  "S2F02",
  "F2E42",
  "SLF03",
  "IRUCB2",
  "WUJ20",
  "QIYO1",
  "OILK9",
  "PIOU1",
  "OLKM2",
  "POLK9",
  "FVB9V",
  "VDW23",
  "OQUD2",
  "OWR19",
  "QPEI1",
  "WI2BH",
  "SSLO2",
];
let randomNumber = parseInt(Math.random() * listOfBookings.length);
var randomBooking = "";
io.on("connection", (socket) => {
  randomBooking = listOfBookings[randomNumber];
  let index = listOfBookings.indexOf(randomBooking);

  console.log(listOfBookings.length);
  console.log("connection made successfully");
  socket.on("message", (payload) => {
    console.log("Message received on server: ", payload);
    if (payload.stage == "1") {
      var sendOutBookingObj = {};
      if (payload.isGetBooking) {
        if (index > -1) {
          listOfBookings.splice(index, 1);
        }
        io.emit("message", randomBooking);
      } else {
        if (payload.connectionStatus == "waiting for pair") {
          listOfBookings.push({
            bookingCode: payload.bookingCode,
            playerName: payload.playerName,
            connectionStatus: payload.connectionStatus,
            concatQuestionNumber: payload.concatQuestionNumber,
          });
        } else if (payload.connectionStatus == "want to pair") {
          var tempList = [];
          listOfBookings.forEach((element) => {
            if (payload.bookingCode == element.bookingCode) {
              if (element.connectionStatus == "waiting for pair") {
                sendOutBookingObj = {
                  bookingCode: element.bookingCode,
                  connectionStatus: "paired",
                  homeName: element.playerName,
                  awayName: payload.playerName,
                  concatQuestionNumber: element.concatQuestionNumber,
                };
                tempList.push(sendOutBookingObj);
              } else {
                sendOutBookingObj = {
                  connectionStatus: "unable to pair",
                  details: "another user joined the game",
                };
              }
            } else {
              tempList.push(element);
            }
          });
          listOfBookings = tempList;
          if (sendOutBookingObj == {}) {
            sendOutBookingObj = {
              connectionStatus: "unable to pair",
              details: "booking code match not found",
            };
          }
          io.emit("message", sendOutBookingObj);
        }
      }
    } else if (payload.stage == "2") {
      console.log("Message distributed");
      if (payload.p2SelectedOption == payload.correctAnswer) {
        payload.isCorrect = true;
      }
      io.emit("message", payload);
    }
    console.log(listOfBookings.length);
  });
  socket.on("disconnect", () => {
    console.log("Socket is disconnected and element is returned");
    if (index < 0) {
      listOfBookings.push(randomBooking);
      console.log(listOfBookings.length);
    }
  });
});

http.listen(PORT, function () {
  console.log("I am listening at port 7000");
});
