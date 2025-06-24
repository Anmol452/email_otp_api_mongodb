import mongoose, {Schema, Document} from 'mongoose';

export interface Message extends Document {
    content: string;
    createAt: Date
}


const MessageSchema: Schema<Message> = new Schema({
    content:{
        type : String,
        required: true
    },
    createAt:{
        type:Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document {
    username : string,
    email : string,
    password : string,
    verifycode : string,
    verifycodeExpiry : Date,
    isVerified: boolean,
    isAcceptingMessage:boolean,
    message : Message[]
}


const UserSchema: Schema<User> = new Schema({
    username:{
        type : String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
   
    email:{
        type : String,
        required: [true, "email is required"],
        unique: true,
        match:[/.+\@.+\..+/,"plase use a valid email address"]
    },

    password:{
        type : String,
        required: [true, "password is required"], 
    },

    vrifycode:{
        type : String,
        required: [true, "vrify code is required"], 
    },
    vrifycodeExpiry:{
        type : Date,
        required: [true, "vrify code Expiry is required"], 
    },

     isVerified:{
        type : Boolean,
        default: false,
    },

     isAcceptingMessage:{
        type : Boolean,
        default: true
    },

      message: [MessageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model("User" , UserSchema)

export default UserModel;