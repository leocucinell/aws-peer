export const userLoggedIn = (user) => {
    //action
    return {
        type: "USER_LOGGED",
        payload: user
    }
}