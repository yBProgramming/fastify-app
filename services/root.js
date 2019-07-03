'use strict'

module.exports = function (fastify, opts, next) {
  fastify.get('/', function (request, reply) {
    reply.send({ root: "Modify here" })
  })

  next()
}



const fs = require('fs');
var path = require('path');
module.exports.options = {
  https: {
    key: fs.readFileSync(path.join(__dirname, '..', 'server_cert', 'mykey.key')),
		cert: fs.readFileSync(path.join(__dirname, '..','server_cert', 'mycrt.crt'))
  }
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
