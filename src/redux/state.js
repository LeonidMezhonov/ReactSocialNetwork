import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 2, post: "My second post"},
            {id: 1, post: "My first post"},
        ],
        newPostText: 'Add some text',
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
}

export let addPost = () => {
    let newPost = {id: 3, post: state.profilePage.newPostText,};
    state.profilePage.postsData.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;