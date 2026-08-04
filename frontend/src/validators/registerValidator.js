function registerValidator(input) {
    let err = {};
    if (!input.username.trim()) err.username = "Username is required";
    if (input.password.length < 8) err.password = "Password at least 8 characters long";
    if (!input.password) err.password = "Password is required";
    if (input.password !== input.confirmPassword) err.confirmPassword = "Passwords do not match";
    if (!input.confirmPassword) err.confirmPassword = "Please confirm your password";
    return err;
}

export { registerValidator };