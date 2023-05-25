const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 2, post: "My second post"},
                {id: 1, post: "My first post"},
            ],
            newPostText: '',
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you doing"},
                {id: 3, message: "What's up?"},
            ],
            dialogData: [
                {id: 1, name: 'JOHN'},
                {id: 2, name: 'DAVID'},
                {id: 3, name: 'PETER'},
                {id: 4, name: 'ANNA'},
                {id: 5, name: 'ROSE'},
                {id: 6, name: 'DICK'},
            ],
        },
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3, 
                post: this._state.profilePage.newPostText,
            };
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }, 
}

export let addPostActionCreator = () => ({ type: ADD_POST, });

export let updateNewPostTextActionCreator = (text) => {
    return { 
        type: UPDATE_NEW_POST_TEXT, 
        newText: text,
    }
}

export default store;