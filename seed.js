const db = require('./models')

db.sync({ force: true })
  .then(() => {
    console.log('db connect success')
    db.close()
  })
  .catch(() => {
    console.log('db connect fails')
    db.close()
  })
