const { v4: uuidv4 } = require('uuid');

const allUsers = [
  {
    id: uuidv4(),
    first_name: 'Ella',
    last_name: 'Mai'
  },
  {
    id: uuidv4(),
    first_name: 'Ya',
    last_name: 'Ma'
  },
  {
    id: uuidv4(),
    first_name: 'Lauren',
    last_name: 'Spencer-Smith'
  },
  {
    id: uuidv4(),
    first_name: 'Jay',
    last_name: 'Park'
  }
];

module.exports = [...allUsers];
