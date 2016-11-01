const USER_SELECTED = "USER_SELECTED";

export const selectUser = (user) => {
    return {
        type: USER_SELECTED,
        payload: user
    }
};