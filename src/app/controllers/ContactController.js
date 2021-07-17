const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Cadastrar um novo registro
  }

  update() {
    // Atualizar um registro
  }

  delete() {
    // Excluir um registro
  }
}

// SIngleton
module.exports = new ContactController();
