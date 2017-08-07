<template>
      <section class='grid has-search-bar'>
        <div v-if='inTheater.title'>
          <h2>
            {{inTheater.title}}
            <router-link :to="{name: 'movie-list', query: {type: inTheater.type}}" class='more'>更多></router-link>
          </h2>
          <div class="card">
            <router-link v-for='(item,index) in inTheater.subjects' class="item" :to='{name : "movie-detail", params : {id : item.id}}' :key='index'>
              <div class="cover">
                <div class="wp">
                  <img class="img-show" v-lazy='item.images.medium'>
                </div>
              </div>
              <div class="info">
                <h3>{{item.title}}</h3>
              </div>
            </router-link>
          </div>
        </div>

        <div v-if='comingSoon.title'>
          <h2>
            {{comingSoon.title}}
            <router-link :to='{name : "movie-list", query : {type : comingSoon.type}}' class='more'>更多></router-link>
          </h2>
          <div class="card">
            <router-link v-for='(item,index) in comingSoon.subjects' class="item" :key='index' :to='{name : "movie-detail", params : {id : item.id}}'>
              <div class="cover">
                <div class="wp">
                  <img class="img-show" v-lazy='item.images.medium'>
                </div>
              </div>
              <div class="info">
                <h3>{{item.title}}</h3>
              </div>
            </router-link>
          </div>
        </div>
        <loading :show='load'></loading>
      </section>
</template>
<script>
    import Loading from '../components/loading.vue';
    import {API_TYPE, fetchMoviesByType} from '../api';

    export default {
        data(){
            return {
              load : true,
              inTheater: {
                  type : ''
              },
              comingSoon: {
                  type : ''
              }
            }
        },
        components: {
            Loading
        },
        methods: {},
        created () {
            var start = 0, count = 9;
            // 正在上映
            fetchMoviesByType (API_TYPE.movie.in_theaters, start, count)
              .then(res => {
                  this.inTheater = res.data;
                  this.inTheater.type = API_TYPE.movie.in_theaters;
                  this.load = false;
              });

            // 即将上映
            fetchMoviesByType(API_TYPE.movie.coming_soon, start, count)
              .then(res => {
                  this.comingSoon = res.data;
                  this.comingSoon.type = API_TYPE.movie.coming_soon;
                  this.load = false;
              });
        }
    }
</script>
