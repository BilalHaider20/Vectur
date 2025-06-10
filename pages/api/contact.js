import { submitContactForm } from "../../controllers/contactController";

export default async function handler(req, res) {
  return submitContactForm(req, res);
}
