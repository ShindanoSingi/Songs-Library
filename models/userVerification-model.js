const mongoose = require('../db/connection')

// Structure data in database
const UserVerificationSchema = new mongoose.Schema(
    {
        userId: String,
        verified: Boolean,
        uniqueString: String,
        createdAt: Date
    }
);

const UserVerification = mongoose.model('userVerification', UserVerificationSchema);

module.exports = UserVerification;