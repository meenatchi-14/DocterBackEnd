import { MongoClient } from "mongodb";
const connectionString="mongodb+srv://meena:meena14@cluster0.ko6rp9j.mongodb.net/"
async function dbConnection(){
    try {
        const client=new MongoClient(connectionString)
await client.connect();
console.log("Database connected")
return client
        
    } catch (error) {
        console.log("error connecting Datebase")
        
    }
    

}
export default dbConnection;