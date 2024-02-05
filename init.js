const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    
    {
        from: "neha",
        to: "preeti",
        message: "please send me your exam notes",
        created_at: new Date()
    },
    {
        from: "zainab",
        to: "sara",
        message: "give me your notebook",
        created_at: new Date(),
    },
    {
        from: "aas mohammad",
        to: "shahnaz",
        message: "cookies are tasty",
        created_at: new Date(),
    },
    {
        from: "mudassir",
        to: "ali",
        message: "full the bike petrol tank",
        created_at: new Date(),
    },
    {
        from: "ali",
        to: "asgar",
        message: "teach me data bases",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);







