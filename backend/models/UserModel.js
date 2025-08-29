const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    confirmPassword: {
        type: String,
        required: [true, 'Confirm password is required'],
        minLength: 6,
        validate: {
            validator: function() {
                return this.password === this.confirmPassword;
            },
            message: 'Passwords do not match'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isPremium: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'curator'],
        default: 'user',
    },
    bookmarks: {
        type: Array,
        default: [],
    },
    otp: {
        type: String,
        default: null,
    },
    otpExpiry: {
        type: Date,
    },
});

userSchema.pre('save', async function(next) {
    console.log('pre saved was called');
    this.confirmPassword = undefined;
    next();
});

userSchema.post('save', function(doc, next) {
    console.log('post save was called');
    next();
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

module.exports = userModel;