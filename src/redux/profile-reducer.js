import { getProfileAPI, getStatusAPI, updateStatusAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postsData: [
        {id: 2, post: "My second post"},
        {id: 1, post: "My first post"},
    ],
    newPostText: '',
    profile: null,
    status: '',
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

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
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
export let getUserProfile = (userId) => {
    return (dispatch) => {
        getProfileAPI(userId).then((response) => {
            dispatch(setUserProfile(response));
          });
    }
};

export let setStatus = (status) => ({type: SET_STATUS, status})
export let getStatus = (userId) => {
    return (dispatch) => {
        getStatusAPI(userId).then((response) => {
            dispatch(setStatus(response));
          });
    }
};
export let updateStatus = (status) => {
    return (dispatch) => {
        updateStatusAPI(status).then((response) => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
          });
    }
};

export default profileReducer;