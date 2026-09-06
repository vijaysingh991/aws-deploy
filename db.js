import mongoose ,{connect} from "mongoose";
const connectionString="mongodb+srv://vijaynimar_db_user:PhXQoFaGlv0tGNRs@deploy1.hvcynjk.mongodb.net/aws-deploy1"
// vijaynimar_db_user
// PhXQoFaGlv0tGNRs
const connection=async()=>{
    try{
        await connect(connectionString)
        console.log("mongodb database connected")
    }catch(err){
        console.log("error in mongodb connection")
    }
}
export default connection