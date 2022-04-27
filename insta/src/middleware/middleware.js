const jsonwebtoken= require('jsonwebtoken')


  
    exports.verifyToken = (req,res,next) =>{
        try{
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jsonwebtoken.verify(token,secretkey)
            req.user = decoded
            
            next();  
        }
        catch (error){
            
            return res.status(404).json({
                message : "invalid token"
            });
        }
        
        
    }