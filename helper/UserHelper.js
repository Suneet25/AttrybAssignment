

let bcrypt=require("bcrypt");

// Store hash in your password DB.
let hashPassword=async(password)=>{
    try {
        let saltRounds=10;
       let hashedPassword= bcrypt.hash(password, saltRounds)
       return hashedPassword;        
    } catch (error) {
        console.log(error);
    }
}

let comparePassword=async(password,hashedPassword)=>{
return bcrypt.compare(password, hashedPassword);

}

module.exports={hashPassword,comparePassword};