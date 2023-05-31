const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 2, post: "My second post"},
        {id: 1, post: "My first post"},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
           let newPost = {
                id: 3, 
                post: state.newPostText,
            };
            state.postsData.unshift(newPost);
            state.newPostText = ''; 
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST, });

export let updateNewPostTextActionCreator = (text) => {
    return { 
        type: UPDATE_NEW_POST_TEXT, 
        newText: text,
    }
}

export default profileReducer;