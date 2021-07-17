const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Rodrigo',
    email: 'rodrigo@email.com',
    phone: '+5547987654321',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Pedro',
    email: 'pedro@email.com',
    phone: '+5547987654321',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  async findById(id) {
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
  }

  async delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactsRepository();
