import { getProfileAPI, getStatusAPI, updateStatusAPI } from "../api/api.js";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postsData: [
        {id: 2, post: "My second post"},
        {id: 1, post: "My first post"},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                post: action.newPost,
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            return stateCopy;
        }

        case DELETE_POST: {
            return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}
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

export let addPost = (newPost) => ({ type: ADD_POST, newPost});
export let deletePost = (postId) => ({ type: DELETE_POST, postId});

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