class MyContactForm {
    constructor(id, fname, lname, email, cellphone, company, message) {
      this.id = id;
      this.fname = fname; // nombre de la mascota (o titulo del anuncio)
      this.lname = lname; // perro | gato | otro
      this.email = email; // links a las fotografías
      this.cellphone = cellphone; // descripción del anuncio
      this.company = company; // contacto con la persona que anuncia al animalito
      this.message = message; // muy importante
    }
  }
  
module.exports = MyContactForm;
