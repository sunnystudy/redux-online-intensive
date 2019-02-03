//Types
import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST, CREATE_POST_ASYNC } from "./types";

// Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};
export const fetchPostsAsync = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};
export const createPost = (post) => {
    return {
        type:    CREATE_POST,
        payload: post,
    };
};
export const createPostAsync = (comment) => async (dispatch, getState) => {
    dispatch({
        type:    CREATE_POST_ASYNC,
        payload: comment,
    });

    const response = await api.create.fetch(comment);
    const result = await response.json();

    dispatch(createPost(result.data));
};
