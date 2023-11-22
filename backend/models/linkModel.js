import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const linkSchema = mongoose.Schema ({
    description: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    domain: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

// check password during login
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('Link', linkSchema);

export default Link; 