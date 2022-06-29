const { v4: uuidv4 } = require('uuid');

const singers = [
  {
    id: "ee770343-585e-4087-9689-c8605a27a94e",
    name: 'Ella Mai'
  },
  {
    id: "136af820-0868-4702-b5c4-754c019375fd",
    name: 'yama'
  },
  {
    id: "5c52b684-f1bb-465f-bff3-630fb66a56b3",
    name: 'Lauren Spencer-Smith'
  },
  {
    id: "39370a67-25fd-4278-9fb1-6720229bd27d",
    name: 'Jay Park'
  }
];

module.exports = [...singers];
