const app = require("./app");
const MessageModel = require("./models/Message.models");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

let myServer = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

//-----------------SCOKET.IO SETUP-------------------------------
const { Server } = require("socket.io");
const io = new Server(myServer, {
  cors: {
    origin: "*",
  },
});
//---------------------------------------------------------------

//-------------------SOCKET EVENTS -----------------------------
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  ("");

  socket.on("join_chat", (data) => {
    socket.join(data);
    console.log("User Joined Room: " + data);
  });

  socket.on("send_message", (data) => {
    const {
      content: { sender, message },
      chatId,
    } = data;
    let newMessage = {
      sender: sender._id,
      message: message,
      conversationId: chatId,
    };
    console.log("new message", newMessage);

    MessageModel.create(newMessage).then(async () => {
      let allMessages = await MessageModel.find({
        conversationId: chatId,
      }).populate("sender");

      socket.to(data.chatId).emit("receive_message", allMessages);
    });
    let test = "testing here";
    socket.emit("hello", test);
  });
});
