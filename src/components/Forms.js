export const Forms = {
  component: "Form",
  fields: [
    {
      name: "fullName",
      component: "PersonFullNameField",
      required: true
    },
    {
      name: "birthday",
      component: "DateField",
      label: "Birthday",
      required: true
    },
    {
      name: "phone",
      component: "PhoneField",
      label: "Phone"
    },
    {
      name: "submit",
      component: "ButtonField",
      label: "Submit",
      type: "submit",
    }
  ]
};
