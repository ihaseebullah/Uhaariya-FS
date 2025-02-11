const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define your User schema
const UserSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: String,
    OTP: { type: String },
    isVerified: { type: Boolean, default: false },
    VFCP: { type: Boolean, default: false }, // Verified for change password
    lastPasswordChangedOn: { type: Date, default: new Date() },
    linkedEmails: [String],
    FCM: String
}, {
    timestamps: true,
    versionKey: false
});

// Middleware to hash password before saving
UserSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

// Method to compare password during login
UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Create the model
const USER = mongoose.model('USER', UserSchema);

module.exports = USER;
