
import * as types from './mutations-type';

const mutations = {
    // 获取电影列表信息
    [types.FETCH_MOVIES] (state, list) {
        state.movies.push(list);
    },


    [types.FETCH_MOVIE_LIST] (state, list) {
        state.movieList.title = list.title;
        state.movieList.total = list.total;
        state.movieList.subjects = state.movieList.subjects.concat(list.subjects);
        // state.movieList.subjects = list.subjects;
        if (state.movieList.subjects.length < state.movieList.total) {
          state.busy = false;
        }
    },


    [types.FETCH_MOVIE_BY_ID] (state, movie) {
        state.movie = movie;
    },


    [types.SET_INFINITE_BUSY] (state, data) {
        state.busy = data;
    },

    [types.CLEAN_MOVIE] (state) {
        state.movie = {}
    },

    [types.CLEAN_MOVIES] (state) {
        state.movies = {}
    },

    [types.CLEAN_MOVIE_LIST] (state) {
        state.movieList = {}
    }

};


export default mutations;
