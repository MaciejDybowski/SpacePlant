export const login = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,

        ).then(() => {
            dispatch({ type: "LOGIN_SUCCESS" })
        })
            .catch(() => {
                console.log("mamy blad logowania")
            })
    }
}

export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() =>
                dispatch({ type: 'LOGOUT_SUCCESS' })
            )
            .catch(() => console.log("logout failed"))
    }
}


export const register = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then((data) => {
            firestore.collection('users').doc(data.user.uid).set({
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                initials : newUser.firstName[0] + newUser.lastName[0],
                points: 0,
                numberOfPlants: 1,
            })
        })
        .then(() => dispatch({type:"ADD_USER"}))
    }
}