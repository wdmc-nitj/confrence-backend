import prisma from "../config/client";
import Contact from "../models/contactUs";
import HttpException from "../models/http-exception";

// Create a new contact
export async function createContact(contact: Contact): Promise<Contact> {
  const newContact = await prisma.contact.create({ data: contact });
  return newContact;
}

// Retrieve all contacts
export async function getAllContacts(): Promise<Contact[]> {
  const contacts = await prisma.contact.findMany();
  return contacts;
}

// Retrieve a single contact by ID
export async function getContactById(id: number): Promise<Contact | null> {
  const contact = await prisma.contact.findUnique({ where: { id } });
  if (!contact) {
    throw new HttpException(404, "Contact not found");
  }
  return contact;
}

// Update a contact by ID
export async function updateContactById(
  id: number,
  update: Partial<Contact>
): Promise<Contact | null> {
  const contact = await prisma.contact.update({ where: { id }, data: update });
  if (!contact) {
    throw new HttpException(404, "Contact not found");
  }
  return contact;
}

// Delete a contact by ID
export async function deleteContactById(id: number): Promise<boolean> {
  const result = await prisma.contact.delete({ where: { id } });
  if (!result) {
    throw new HttpException(404, "Contact not found");
  }
  return result !== null;
}
