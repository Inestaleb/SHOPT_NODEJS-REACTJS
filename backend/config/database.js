const mongoose =require('mongoose')



const connectDatabase = () => {
   mongoose.connect(process.env.DB_LOCAL_URL)
       .then(con => {
           console.log(`MongoDB database connected with HOST: ${con.connection.host}`);
       })
       .catch(err => {
           console.error(`Error connecting to MongoDB: ${err.message}`);
           // Process exit with failure (optional, depends on your use case)
           process.exit(1);
       });
};
module.exports= connectDatabase