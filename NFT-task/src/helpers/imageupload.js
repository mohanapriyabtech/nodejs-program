var multer = require('multer');
const postimage =req.params.postimage;
  const user=req.params.userid;
  const userdetails=await User.findOne({_id:req.params.userid}) 
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });