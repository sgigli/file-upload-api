// File is for command-line testing uploading files to AWS S3
require('dotenv').config()
// Require AWS Software Development Kit
const AWS = require('aws-sdk')
// Not sure if we need this: UUID Package

// Define bukcet name to use
const bucket = 'pestopasta'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

// Create object of params for putObject call
// const params = {
//   Bucket: bucket,
//   ACL: 'public-read'
// }

module.exports = (key, body) => {
  const params = {
    Bucket: bucket,
    ACL: 'public-read'
  }
  return new Promise((resolve, reject) => {
    // Add key and body params to object
    params.Key = key
    params.Body = body
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// const uploadPromise = s3.upload(params).promise()
// uploadPromise.then(data => {
//   console.log(data)
// })
//   .catch(console.error)
