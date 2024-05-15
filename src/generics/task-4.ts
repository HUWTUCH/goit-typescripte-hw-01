type UserType = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

function createOrUpdateUser(updates: Partial<UserType>): UserType {
    const initialValues: UserType = {
        name: "",
        surname: "",
        email: "",
        password: "",
    };
    return { ...initialValues, ...updates };
}

createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
});