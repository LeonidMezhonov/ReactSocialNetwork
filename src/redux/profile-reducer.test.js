import profileReducer, { addPost, deletePost } from "./profile-reducer";

let initialState = {
  postsData: [
    { id: 2, post: "My second post" },
    { id: 1, post: "My first post" },
  ],
};

test("state length should be increased", () => {
  // 1. Test date
  let action = addPost("new post");

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});

test("new post should be added", () => {
  // 1. Test date
  let action = addPost("new post");

  // 2. action
  let newState = profileReducer(initialState, action);

  // 3. expectation
  expect(newState.postsData[0].post).toBe("new post");
});

test("after deleting post length of state should be decreased", () => {
    // 1. Test date
    let action = deletePost(1);
  
    // 2. action
    let newState = profileReducer(initialState, action);
  
    // 3. expectation
    // expect(newState.postsData.length).toBe(2);
  });
