export const createProject = (project) => {
  return(dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      title : project.title,      // can use spread operator as ...project
      content : project.content,
      authorFirstName : profile.firstName,
      authorLastName : profile.lastName,
      authorId : authorId,
      createDate : new Date()
    }).then(() => {

      dispatch({
        type : 'CREATE_PROJECT',
        project : project  //can use es6, property name and value have same identifier

      })
    }).catch((err) => {
      dispatch({
        type : 'CREATE_PROJECT_ERROR',
        err : err
      })
    })

  }
}
