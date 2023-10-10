import contactsSlice from "./routes/contacts/contactsSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    contacts: contactsSlice
  }
})

export default store