const signupResolver = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = {
      type: 'required',
      message: 'Name is required',
    };
  } else if (values.name.length < 3) {
    errors.name = {
      type: 'minLength',
      message: 'Name must be at least 3 characters',
    };
  }
  // email validation
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Email is invalid',
    };
  } else if (!values.email.includes('@')) {
    errors.email = {
      type: 'pattern',
      message: 'Email is invalid',
    };
  }
  // password validation
  if (!values.password) {
    errors.password = {
      type: 'required',
      message: 'Password is required',
    };
  } else if (values.password.length < 8) {
    errors.password = {
      type: 'minLength',
      message: 'Password must be at least 8 characters',
    };
  } else if (
    !values.password.match(/\d/) ||
    !values.password.match(/[a-zA-Z]/)
  ) {
    errors.password = {
      type: 'pattern',
      message: 'Password must contain at least one letter and one number',
    };
  } else if (!values.password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    errors.password = {
      type: 'pattern',
      message: 'Password must contain at least one special character',
    };
  }
  // confirm password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = {
      type: 'required',
      message: 'Confirm Password is required',
    };
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = {
      type: 'match',
      message: 'Password and Confirm Password must be same',
    };
  }
  return {
    values,
    errors,
  };
};

const loginResolver = (values) => {
  const errors = {};
  // email validation
  if (!values.email) {
    errors.email = {
      type: 'required',
      message: 'Email is required',
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Email is invalid',
    };
  } else if (!values.email.includes('@')) {
    errors.email = {
      type: 'pattern',
      message: 'Email is invalid',
    };
  }
  // password validation
  if (!values.password) {
    errors.password = {
      type: 'required',
      message: 'Password is required',
    };
  } else if (values.password.length < 8) {
    errors.password = {
      type: 'minLength',
      message: 'Password must be at least 8 characters',
    };
  } else if (
    !values.password.match(/\d/) ||
    !values.password.match(/[a-zA-Z]/)
  ) {
    errors.password = {
      type: 'pattern',
      message: 'Password must contain at least one letter and one number',
    };
  } else if (!values.password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    errors.password = {
      type: 'pattern',
      message: 'Password must contain at least one special character',
    };
  }
  return {
    values,
    errors,
  };
};

export { loginResolver, signupResolver };
