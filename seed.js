const { Gardener, Plot, Vegetable, Planting, db } = require('./models');

db.sync()
  .then(() => {
    console.log('db connect success');
    db.close();
  })
  .catch(() => {
    console.log('db connect fails');
    db.close();
  });

// for these to work need to add 'where' statement
// Vegetable.create({
//   name: 'carrot',
//   color: 'orange',
// }).then(console.log('creation success'));
// Vegetable.findOrCreate({
//   name: 'beet',
//   color: 'red',
//   plantedOn: '11/12/18',
// }).then(console.log('beet creation success'));
// Vegetable.findOrCreate({
//   name: 'potato',
//   color: 'grayish',
//   plantedOn: '03/12/1991',
// }).then(console.log('potato creation success'));

Gardener.create({
  name: 'Gary the Gardener',
  age: 98,
  favoriteVegetableId: 3,
})
  .then(gary => {
    return Plot.create({
      size: 100000,
      shaded: false,
      gardenerId: 'Gary the Gardener'.id,
    });
  })
  .then(plot => {
    return Planting.create({
      plotId: plot.id,
      vegetableId: 'Gary the Gardener'.favoriteVegetableId,
    });
  });
