const jwt=require('jsonwebtoken');
const JSON_SEC="nithya@123";

const FetchUser=(req,res,next)=>{

    const token=req.header('auth-token');
    if(!token){
        return res.status(500).json({error:"Please enter vslid AuthTOken"})
    }
    try {
        const data=jwt.verify(token,JSON_SEC);
    req.user=data.user;
    next();
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports=FetchUser
