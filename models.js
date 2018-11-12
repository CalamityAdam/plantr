const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: true
})

const Gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
})

const Vegetable = db.define('vegtable', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  plantedOn: {
    type: Sequelize.DATE
  }
})

Plot.belongsTo(Gardener)
Gardener.hasOne(Plot)

Vegetable.belongsToMany(Plot, { through: 'planting' })
Plot.hasMany(Vegetable)

module.exports = db
