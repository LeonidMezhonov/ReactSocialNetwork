const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postsData: [
        {id: 2, post: "My second post"},
        {id: 1, post: "My first post"},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3, 
                post: state.newPostText,
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            return stateCopy;
        } 
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}

export let addPost = () => ({ type: ADD_POST, });

export let updateNewPostText = (text) => {
    return { 
        type: UPDATE_NEW_POST_TEXT, 
        newText: text,
    }
}

export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;