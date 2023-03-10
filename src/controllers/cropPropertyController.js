const cropPropertyModel = require('../models/cropPropertyModel');
const mongoose = require('mongoose')


//============================================= Create Crop Property =====================================//

const createCropProperty = async (req, res) => {
    try {
        let data = req.body;
        const { cropCycle,propertyId, season, months } = data;

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, message: 'Please enter data in request body' });
        }

        if (!cropCycle) {
            return res.status(400).send({ status: false, message: 'Please enter cropCycle' });
        }

        if (!propertyId) {
            return res.status(400).send({ status: false, message: 'Please enter propertyId' });
        }
        if (!mongoose.isValidObjectId(propertyId)) {
            return res.status(400).send({ status: false, message: 'propertyId is not valid ObjectId' });
        }

        if (!season) {
            return res.status(400).send({ status: false, message: 'Please enter season' });
        }
        if (!months) {
            return res.status(400).send({ status: false, message: 'Please enter months' });
        }

        let saveData = await cropPropertyModel.create(data);
        return res.status(201).send({ status: true, message: 'cropProperty creation successfull', data: saveData });
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}



module.exports = { createCropProperty }