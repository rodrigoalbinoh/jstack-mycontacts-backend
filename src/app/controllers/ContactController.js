class ContactController {
  index(request, response) {
    // Listar todos os registros

    response.send('Lista de contatos');
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
