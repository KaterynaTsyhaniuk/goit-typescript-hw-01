type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...initialValues };
}

export const newValue = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});