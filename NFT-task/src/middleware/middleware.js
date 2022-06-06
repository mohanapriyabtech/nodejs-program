const jwt = require('jsonwebtoken')

module.exports=(req, res, next)=> {

      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
    
      if (token == null) return res.sendStatus(401)
    
      jwt.verify(token,'secretkey',(err, decode) => {
    
       if (err) return res.sendStatus(403)
       else (decode)

         req.user= decode
         res.send(decode)
         next()
        
      })
    }