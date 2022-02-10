import {COMMENT, START_LOADING, END_LOADING, FETCH_ALL,FETCH_ALL1, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index';
import swal from 'sweetalert2'
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getPosts2 = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts2(page);

    dispatch({ type: FETCH_ALL, payload: { data, nextpage:currentPage+1, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
console.log(data)
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  let timerInterval
  swal.fire({
    title: 'Uploading your Post!',
    html: 'Loading... <b></b> milliseconds.',
    timer: 10000,
    timerProgressBar: true,
    didOpen: () => {
      swal.showLoading()
      const b = swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });

    { 
    
      const Toast = swal.mixin({ toast: true, position: 'top-end',
      showConfirmButton: false, timer: 3000, timerProgressBar: true,
       didOpen: (toast) => { toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer) } }) 
     Toast.fire({ icon: 'success', title: 'Post Created successfully' })
    }
  } catch (error) {
    console.log(error,"hello");
  

      swal.fire({ icon: 'error', 
      title: 'Oops...', text: 'Something went wrong ,Please Check your internet connection!',
     })
    

  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (userId, id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id, userId);

    dispatch({ type: LIKE, payload:data });

    return data.likes;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

