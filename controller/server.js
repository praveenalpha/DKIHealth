const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const userRouter = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { registerUser, authUser, allUsers } = require("./controllers/userController");
const {protect} = require("./middleware/authMiddleware");
const { fetchChat, accessChat, createGroupChat } = require("./controllers/chatController");
dotenv.config({path: "controller/.env"});

connectDB();

app.use(express.json());

app.get("/api/user" ,allUsers);
app.post("/api/chat", protect, accessChat)
app.get("/api/chat", protect, fetchChat);
app.post("/api/chat/group", protect, createGroupChat);
// app.put("/api/chat/rename",protect, renameGroup);
// app.put("/api/chat/groupremove", protect, remoeFromGroup);
// app.put("groupadd", protect, addToGroup);
app.post('/register',registerUser);
app.post("/api/user/login", authUser);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App Started on port ${PORT}`));