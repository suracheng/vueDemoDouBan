import Vue from 'vue';
import Router from 'vue-router';
import Movies from '../page/movies.vue';
import MovieDetail from '../page/movieDetail.vue';
import MovieList from '../page/movieList.vue';
import SearchList from '../page/searchList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Movies, name : 'index'},
    { path: '／movie',  component: Movies},
    { path : '/movie/list', component: MovieList, name: 'movie-list'},
    { path : '/movie/subject/:id', component: MovieDetail, name: 'movie-detail'},
    { path : '/movie/search', component: SearchList, name: 'search-list'},
    { path: '*', redirect: '/'}
  ]
});
