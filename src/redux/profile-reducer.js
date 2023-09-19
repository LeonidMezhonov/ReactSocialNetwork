import { getProfileAPI, getStatusAPI, updateStatusAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
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
                post: action.newPost,
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.unshift(newPost);
            return stateCopy;
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