import mongoose from "mongoose";
//import Conversation from "../../client/src/chat/menu/Conversation";

const ConversationSchema = new  mongoose.Schema({
    members: {
        type:Array
    },
    message: {
        type:String
    }},
    {
        timestamps:true
    }
    );

const conversation = mongoose.model('Conversation',ConversationSchema);

export default conversation;