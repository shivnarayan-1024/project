import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({
    convesatioId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    text: {
        type:String
    }
},
{
    timestamps: true
});

const message = mongoose.model('Message', MessageSchema);

export default message;