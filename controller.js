import { user as User } from "./schema.js"
export const getMe = async(req,res)=>{
    try{
        const userId=req.body
        const userData=await User.findOne({
            _id:userId
        })
       return res.status(200).json({          // <-- fix
            status: true,
            message: "User fetched successfully",
            result: userData
        })
    }catch(err){
         return res.status(500).json({          // <-- fix
            status: false,
            message: "Error in get me",
            result: err.message
        })
    }
}

export const createUser=async(req,res)=>{
    try{
        const {firstName,lastName,email,password}=req.body
        const newUser = await User.create({    // <-- ye line change ki
            firstName, lastName, email, password
        })

        return res.status(201).json({          // <-- fix
            status: true,
            message: "user created successfully",
            result: newUser
        })
    }catch(err){
         return res.status(500).json({          // <-- fix
            status: false,
            message: "Error in create User",
            result: err.message
        })
    }
}