//Use Fixture adapter instead of Rest adapter
App.ApplicationAdapter = DS.FixtureAdapter.extend();

// Define category model more: http://emberjs.com/guides/models/defining-models/
App.Category = DS.Model.extend({
  title: DS.attr(), // string
  items: DS.hasMany('item', {async:true}) // has-many relationship, async: makes separate requests for those models and then joins them together asynchronously.
});

// Define item model more: http://emberjs.com/guides/models/defining-models/
App.Item = DS.Model.extend({
  title: DS.attr(),
  price: DS.attr(),
  category: DS.belongsTo('category') // item has one category
});


// Fixture data: sample data for testing our application before using real JSON API
App.Category.FIXTURES = [
  {
    id: 1,
    title: 'Alcohol',
    items: [1,2,3]
  },
  {
    id: 2,
    title: 'Geek stuff',
    items: [4,5,6]
  },
  {
    id: 3,
    title: 'Food',
    items: [7,8,9,10,11]
  }
];

App.Item.FIXTURES = [
  {
    id: 1,
    title: 'Beer',
    price: 450,
    category: 1
  },
  {
    id: 2,
    title: 'Whiskey',
    price: 550,
    category: 1
  },
  {
    id: 3,
    title: 'Wine',
    price: 500,
    category: 1
  },
  {
    id: 4,
    title: 'Macbook Pro 13"',
    price: 350000,
    category: 2
  },
  {
    id: 5,
    title: 'App store',
    price: 5000,
    category: 2
  },
  {
    id: 6,
    title: 'Books',
    price: 2000,
    category: 2
  },
  {
    id: 7,
    title: 'Sushi',
    price: 2000,
    category: 3
  },
  {
    id: 8,
    title: 'Pizza',
    price: 1500,
    category: 3
  },
  {
    id: 9,
    title: 'Salat',
    price: 1000,
    category: 3
  },
  {
    id: 10,
    title: 'Fruits',
    price: 500,
    category: 3
  },
  {
    id: 11,
    title: 'Taco',
    price: 1000,
    category: 3
  }
];
