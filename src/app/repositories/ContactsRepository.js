const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Rodrigo',
    email: 'rodrigo@email.com',
    phone: '+5547987654321',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
