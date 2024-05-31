// @des Get all the contacts
// @route GET/api/contacts
// access public

 export const getContacts = (req, res) => {
    res.status(200).json({ message: 'Hi, this is contacts' });
  }

// @des Get the contact
// @route GET/api/contacts/:id
// access public
 export const getContact = (req, res) => {
  res.status(200).json({ message: `Hi, this is contacts ${req.params.id}` });
}



// @des Create the contacts
// @route POST/api/contacts
// access public
 export const createContact = (req, res) => {
    res.status(201).json({ message: 'Contacts is created ' });
  }


// @des  edited  contacts
// @route PUT/api/contacts
// access public
 export const editContact = (req, res) => {
    res.status(200).json({ message: `Hi, this contact is edited ${req.params.id}` });
  }

// @des Delete contacts
// @route DELETE/api/contacts/:id
// access public
 export const deleteContact = (req, res) => {
    res.status(200).json({ message: `Deleted contact is  ${req.params.id}`});
  }

  // @des Post all the contacts
// @route POST/api/contacts
// access public
//  export const postContact = (req, res) => {
//     res.status(200).json({ message: 'Hi, this is contacts' });
//   }

// @des Get all the contacts
// @route GET/api/contacts
// access public
//  export const putContact = (req,res)=>{
//     res.json({'message':`post is edited ${req.params.id}`})
//   }


