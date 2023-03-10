const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    organizationName: {
        type: String,
        required: true
    },
    headQuarter: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    }  
}, { timestamps: true });

module.exports = mongoose.model('Organization', organizationSchema);