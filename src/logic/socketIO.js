import io from "socket.io-client";

const URL = "http://localhost:5000/";

const socket = new io(URL,{ autoConnect: false });


// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });

// socket.on("connect_error", (err) => {
//   if (err.message === "invalid username") {
//     // this.usernameAlreadySelected = false;
//   }
// });

// socket.on("users", (users) => {
//   users.forEach((user) => {
//     user.self = user.userID === socket.id;
//     console.log(user);
//   });
//   // put the current user first, and then sort by username
//   users = users.sort((a, b) => {
//     if (a.self) return -1;
//     if (b.self) return 1;
//     if (a.username < b.username) return -1;
//     return a.username > b.username ? 1 : 0;
//   });
//   console.log(users);
// });

// socket.on("user connected", (user) => {
//   console.log("connected the " + user);
// });
export default socket;
