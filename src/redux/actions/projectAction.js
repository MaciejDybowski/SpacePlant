export const createProject = (project) => {
    return (dispatch, getState, { getFirebase }) => {
        // make async code
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile
        const uid = getState().firebase.auth.uid
         firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createdAt: new Date(),
        }).then(() => {
            dispatch({
                type: 'add_project',
                project,
            })
        }).catch((err) => {
            console.log(err);
        })

    }
}


