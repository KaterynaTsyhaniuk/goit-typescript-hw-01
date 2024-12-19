type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

export const formParams: Params = {
  email: "test@gmail.com",
  firstName: "first",
  lastName: "test",
  phone: "0987890876",
};
