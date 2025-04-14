import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, {
    timestamps: true
});

let User;
try {
    User = mongoose.model('User');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        User = mongoose.model('User', userSchema);
    } else {
        console.error('Error in model definition:', error);
        throw error; // Rethrow the error after logging it
    }
}

if (!User) {
    console.log('User model does not exist');
} else {
    console.log('User model already exists');
}

export default User;

