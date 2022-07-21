const mongoose = require('mongoose');

const connectDB = async () => {
    console.log("mongodb+srv://1234:1234@cluster0.dcwjrdn.mongodb.net/?retryWrites=true&w=majority");

    try{
            const con = await mongoose.connect("mongodb+srv://1234:1234@cluster0.dcwjrdn.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    
            console.log('MongoDB Connected...');

    }catch(err){
           console.error(err.message);
           process.exit(1);  
    }

};

module.exports = connectDB;