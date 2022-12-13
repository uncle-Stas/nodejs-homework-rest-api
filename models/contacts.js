const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const filePath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(filePath);

  return JSON.parse(data);
};

const getContactById = async contactId => {
  const data = await listContacts();
  const result = data.find(item => item.id === contactId);

  if (!result) {
    return null;
  }

  return result;
};

const removeContact = async contactId => {
  const data = await listContacts();
  const index = data.findIndex(item => item.id === contactId);

  if (index === -1) {
    return null;
  }

  const [result] = data.splice(index, 1);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  return result;
};

const addContact = async body => {
  const data = await listContacts();
  const newContact = { id: nanoid(), ...body };
  data.push(newContact);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  return newContact;
};

const updateContact = async (contactId, body) => {
  const data = await listContacts();
  const index = data.findIndex(item => item.id === contactId);

  if (index === -1) {
    return null;
  }

  data[index] = { id: contactId, ...body };
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));

  return data[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
