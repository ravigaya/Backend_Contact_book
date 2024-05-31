

import { Router } from 'express';
import {getContacts,getContact,createContact,editContact,deleteContact} from '../Contollers/contactsController.js';

const router = Router();
  router.route('/').get(getContacts).post(createContact);
  router.route('/:id').get(getContact).put(editContact).delete(deleteContact);
  
export default router;
