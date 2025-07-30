const mongoose = require('mongoose');

const connectAdminDb = async() => {
    try{
        await mongoose.connect(process.env.ADMIN_DB_URI,{});
        console.log("AdminDb connected");
    }catch(err){
        console.error("Error connecting to database",err);
    }
};

module.exports = connectAdminDb;