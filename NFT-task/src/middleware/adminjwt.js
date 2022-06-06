
const jwt = require('jsonwebtoken')

module.exports=(req, res, next)=> {

      
      
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
    
      if (token == null) return res.sendStatus(401)
    
      jwt.verify(token,'secretkey',(err, decoded) => {
    
       if (err) return res.sendStatus(403)
       else (decoded)
          console.log(decoded)   
         .then(result=>{
         if(result.role=="admin"){
         console.log("collection sent to admin verification")
          re.send("collection sent to admin verification")
         }
         
         next()
        
      })
    }



