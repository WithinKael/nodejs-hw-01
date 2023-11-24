import * as contactsService from "./contacts.js";
import { program } from "commander";
// import yargs from "yargs";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await contactsService.getContactById(id);
      return console.log(contactById);

    case "add":
      const addedContact = await contactsService.addContact(name, email, phone);
      return console.log(addedContact);

    case "remove":
      const deletedContact = await contactsService.removeContact(id);
      return console.log(deletedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// const { argv } = yargs(process.argv.slice(2));
// invokeAction(argv);

program
  .option("--action <type>")
  .option("--id <type>")
  .option("--name <type>")
  .option("--email <type>")
  .option("--phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
