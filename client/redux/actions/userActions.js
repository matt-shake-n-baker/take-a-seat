const REGISTER_USER = "REGISTER_USER";

const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    user,
  };
};

export { REGISTER_USER, registerUser };
