
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    // Your SECRET ACCESS KEY from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: "nsOolv32RrpCjeZqXDkRygTemAe2nFBN/8/aZcF3",
    // Not working key, Your ACCESS KEY ID from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: "AKIAJ2OTT2GAHGNOZGIA",
    region: 'us-east-1' // region of your bucket
    
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'foodciti-image',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: "Testing_Meta_Data"});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })
  
  module.exports = upload;