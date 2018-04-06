export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }; 
}
// this is action creator file
// the function above is the action creator 
// so whenever we call the action creator (selectLibrary) then we must provide 
// libraryId (like the library that i wanna select) and that will be attached to the action payload