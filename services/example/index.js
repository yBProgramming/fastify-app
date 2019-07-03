'use strict'

module.exports = function (fastify, opts, next) {
  fastify.use('/test',(req, res, nextto)=>{
    console.log("Access test");
    console.log(req.headers['token'])
    nextto();
  });
  fastify.get('/test', function (req, res) {
    res.send({js: 'JSon'})
  })
  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
