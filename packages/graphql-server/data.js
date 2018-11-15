const cats = [
  {
    id: '1',
    name: 'mr fluffs',
    age: 4,
  },
  {
    id: '2',
    name: 'henri',
    age: 1,
  },
  {
    id: '3',
    name: 'gary',
    age: 10,
  },
];

const messages = [
  {
    message: 'meow',
    cat_id: '1',
    id: '1',
  },
  {
    message: 'feed me',
    cat_id: '1',
    id: '2',
  },
  {
    message: 'i brought you a bird',
    cat_id: '3',
    id: '3',
  },
  {
    message: 'rub my tummy',
    cat_id: '2',
    id: '4',
  },
];

module.exports = {
  cats,
  messages,
};
