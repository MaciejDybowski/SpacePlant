const initState = {
    authError: null,
    isAuthenticated: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("login success")
            return {
                ...state,
                authError: null,
                isAuthenticated: true,
            }
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                authError: null,
                isAuthenticated: false
            }
        case "ADD_USER":
            console.log("user added")
            return state;
        default:
            return state
    }
}

export default authReducer;