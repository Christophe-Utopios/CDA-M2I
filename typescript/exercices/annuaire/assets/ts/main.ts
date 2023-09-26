import Contact from "./classes/Contact.js";


const contacts: Contact[] = [
  new Contact("Albert", "DUPONT", new Date("1985-10-25"), "a.dupont@example.com", "+33 123 456 789", ""),
  new Contact("Hélène", "DUPONT", new Date("1988-06-27"), "h.dupont@example.com", "+33 147 654 852", ""),
  new Contact("John", "SMITH", new Date("1992-04-14"), "j.smith@example.com", "+32 158 943 225", ""),
  new Contact("Clara", "GOMEZ", new Date("1967-09-13"), "c.gomez@example.com", "+33 146 997 254", ""),
  new Contact("Elizabeth", "MARTIN", new Date("1964-02-22"), "e.martin@example.com", "+33 119 788 254", "")
]


console.table(contacts)

const btnAddContacts = document.getElementById("btnAddContact") as HTMLButtonElement
const btnEditContacts = document.getElementById("btnEditContact") as HTMLButtonElement
const btnDeleteContacts = document.getElementById("btnDeleteContact") as HTMLButtonElement

const contactsContainer = document.getElementById("contactsContainer") as HTMLDivElement

const addContactModal = document.getElementById("addContactModal") as HTMLDivElement
const closeAddContactCross = document.getElementById("addContactClose") as HTMLElement
const formAddContact = document.getElementById("formAddContact") as HTMLFormElement

const editContactModal = document.getElementById("editContactModal") as HTMLDivElement
const closeEditContactCross = document.getElementById("editContactClose") as HTMLElement
const formEditContact = document.getElementById("formEditContact") as HTMLFormElement


let selectedContact = contacts[0]


const refreshContactContainer = () => {
    console.log("mettre les contacts de mon tableau dans mon dom")
    contactsContainer.innerHTML = ""

    contacts.forEach(contact => {
        const newButton = document.createElement("button");
        newButton.textContent = contact.fullname
        newButton.className = contact === selectedContact ? "btn btn-light w-100 my-2" :  "btn btn-outline-light w-100 my-2"
        newButton.addEventListener('click', () => {
            selectedContact = contact
            refreshContactContainer()
            refreshContactInfos()
        })

        contactsContainer.appendChild(newButton)
    })

}

const refreshContactInfos = () => {
    console.log("afficher tous les details d'un contact")
    console.log(selectedContact)
  const firstnameEl = document.getElementById("details-firstname") as HTMLInputElement
  const lastnameEl = document.getElementById("details-lastname") as HTMLInputElement
  const avatarEl = document.getElementById("details-avatarURL") as HTMLImageElement
  const dateOfBirthEl = document.getElementById("details-dateOfBirth") as HTMLInputElement
  const ageEl = document.getElementById("details-age") as HTMLSpanElement
  const emailEl = document.getElementById("details-email") as HTMLInputElement
  const phoneNumberEl = document.getElementById("details-phoneNumber") as HTMLInputElement

  firstnameEl.value = selectedContact ? selectedContact.firstname : ""
  lastnameEl.value = selectedContact ? selectedContact.lastname : ""
  dateOfBirthEl.value = selectedContact ? selectedContact.dateOfBirth.toLocaleDateString() : ""
  emailEl.value = selectedContact ? selectedContact.email : ""
  phoneNumberEl.value = selectedContact ? selectedContact.phoneNumber : ""
  avatarEl.src = selectedContact ? selectedContact.avatarURL : "./assets/img/unknown.jpg"
  ageEl.textContent = selectedContact ? `${selectedContact.age}yo` : ""
}

btnAddContacts.addEventListener('click', () => {
    addContactModal.style.display = "block"
  })


  formAddContact.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const firstnameEl = document.getElementById("add-firstname") as HTMLInputElement
    const lastnameEl = document.getElementById("add-lastname") as HTMLInputElement
    const dateOfBirthEl = document.getElementById("add-dateOfBirth") as HTMLInputElement
    const emailEl = document.getElementById("add-email") as HTMLInputElement
    const phoneNumberEl = document.getElementById("add-phoneNumber") as HTMLInputElement
    const avatarEl = document.getElementById("add-avatarURL") as HTMLInputElement
    console.log(dateOfBirthEl.value)
    const newContact = new Contact(firstnameEl.value, 
      lastnameEl.value, 
      new Date(dateOfBirthEl.value.split("/").reverse().join("-")), 
      emailEl.value, 
      phoneNumberEl.value, 
      avatarEl.value)
  
    contacts.push(newContact)
  
    refreshContactContainer();
    addContactModal.style.display = "none"
  })

  closeAddContactCross.addEventListener('click', () => {
    addContactModal.style.display = "none"
  })

  btnDeleteContacts.addEventListener('click', () => {
    if (confirm("Are you sure?")) {
      contacts.splice(contacts.indexOf(selectedContact), 1)
      selectedContact = undefined;
      refreshContactContainer();
      refreshContactInfos();
    }
  }) 

  btnEditContacts.addEventListener('click', () => {
    if (selectedContact) {
      editContactModal.style.display = "block"
  
      const firstnameEl = document.getElementById("edit-firstname") as HTMLInputElement
      const lastnameEl = document.getElementById("edit-lastname") as HTMLInputElement
      const avatarEl = document.getElementById("edit-avatarURL") as HTMLInputElement
      const dateOfBirthEl = document.getElementById("edit-dateOfBirth") as HTMLInputElement
      const emailEl = document.getElementById("edit-email") as HTMLInputElement
      const phoneNumberEl = document.getElementById("edit-phoneNumber") as HTMLInputElement
    
      firstnameEl.value = selectedContact.firstname
      lastnameEl.value = selectedContact.lastname
      dateOfBirthEl.value = selectedContact.dateOfBirth.toLocaleDateString().split("/").reverse().join("-")
      emailEl.value = selectedContact.email
      phoneNumberEl.value = selectedContact.phoneNumber
      avatarEl.value = selectedContact.avatarURL
    }
    
  })

  closeEditContactCross.addEventListener('click', () => {
    editContactModal.style.display = "none"
  })


  formEditContact.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const firstnameEl = document.getElementById("edit-firstname") as HTMLInputElement
      const lastnameEl = document.getElementById("edit-lastname") as HTMLInputElement
      const avatarEl = document.getElementById("edit-avatarURL") as HTMLInputElement
      const dateOfBirthEl = document.getElementById("edit-dateOfBirth") as HTMLInputElement
      const emailEl = document.getElementById("edit-email") as HTMLInputElement
      const phoneNumberEl = document.getElementById("edit-phoneNumber") as HTMLInputElement
  
      selectedContact.firstname = firstnameEl.value
      selectedContact.lastname = lastnameEl.value
      selectedContact.avatarURL = avatarEl.value
      selectedContact.email = emailEl.value
      selectedContact.phoneNumber = phoneNumberEl.value
      selectedContact.dateOfBirth = new Date(dateOfBirthEl.value.split("/").reverse().join("-"))
  
      editContactModal.style.display = "none"
  
      refreshContactContainer();
      refreshContactInfos();
  })

refreshContactContainer()
refreshContactInfos()
