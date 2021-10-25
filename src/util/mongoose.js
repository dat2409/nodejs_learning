module.exports = {
    listMongooseToObject: mongooses => {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    singleMongooseToObject: mongoose => mongoose ? mongoose.toObject() : mongoose
    // singleMongooseToObject: mongoose => mongoose.toObject()
}