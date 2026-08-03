function registerValidator(user) {
    let err = {};
    if (!user.username.trim()) err.username = "Username is required";
    if (!user.password) err.password = "Password is required";
    if (!user.confirmPassword) err.confirmPassword = "Please confirm your password";
    if (user.password !== user.confirmPassword) err.confirmPassword = "Passwords do not match";
    return err;
}

export { registerValidator };