const mongoose = require("mongoose");

const User = mongoose.model('User', {
    username: {type: String, unique: true},
    password: String
});

const Subject = mongoose.model('Subject', {
    name: {type: String, unique: true},
});

const Faculty = mongoose.model('Faculty', {
    name: {type: String, unique: true}
});

const Teacher = mongoose.model('Teacher', {
    name: String,
    surname: String,
    fathersName: String,
    rating: Number,
    faculty: {
        type: Schema.Types.ObjectId, ref: Faculty
    }
});

const Order = mongoose.model('Order', {
    description: String,
    price: Number,
    user: {
        type: Schema.Types.ObjectId, ref: User
    },
    phoneNumber: String,
    timestamp: {type: Number, default: Date.now},
});

const CommentTeacher = mongoose.model('CommentTeacher', {
    text: String,
    timestamp: {type: Number, default: Date.now},
    user: {
        type: Schema.Types.ObjectId, ref: User
    },
    teacher: {
        type: Schema.Types.ObjectId, ref: Teacher
    } 
});

const CommentSubject = mongoose.model('CommentSubject', {
    text: String,
    timestamp: {type: Number, default: Date.now},
    user: {
        type: Schema.Types.ObjectId, ref: User
    },
    subject: {
        type: Schema.Types.ObjectId, ref: Subject
    } 
});

const CommentOrder = mongoose.model('CommentOrder', {
    text: String,
    timestamp: {type: Number, default: Date.now},
    user: {
        type: Schema.Types.ObjectId, ref: User
    },
    order: {
        type: Schema.Types.ObjectId, ref: Order
    } 
});