import mongoose from "mongoose"

export const connectdb =  ()=>{
    mongoose.connect("mongodb+srv://bhowmikcwda:yncM3DCSeOYtbdUg@cluster0.begtrbm.mongodb.net/",{
        dbName: "Ecommerce_24"
    })
    .then((c)=>{console.log(`Database connected, ${c.connection.host}`)})
    .catch((e)=>{console.log(e)});
}
// yncM3DCSeOYtbdUg