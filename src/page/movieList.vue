<template>
    <section class="grid has-search-bar" v-infinite-scroll='loadMore' infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <h2>{{movieList.title}}</h2>
        <div class="card" v-if="movieList.subjects.length">
          <router-link class='item' v-for='(item,index) in movieList.subjects' :key="index" :to="{name:'movie-detail', params: {id : item.id}}">
              <div class="cover">
                  <div class="wp">
                    <img v-lazy="item.images.medium" alt="" class="img-show">
                  </div>
              </div>
              <div class="info">
                <h3>{{item.title}}</h3>
              </div>
          </router-link>
        </div>
        <loading :show='loading'></loading>
    </section>
</template>
<script>
    import Loading from '../components/loading.vue';
    import InfiniteScroll from 'vue-infinite-scroll';
    import * as types from '../store/mutations-type';
    import {API_TYPE, fetchMoviesByType} from '../api';

    export default {
        data(){
            return {
              loading : true,
              type : '',
              movieList : {
                subjects : []
              },
              busy : false
            }
        },
        directives: { InfiniteScroll },
        components: { Loading },
        created () {
            this.type = this.$route.query.type;
        },
        methods: {
          loadMore () {
            let start = this.movieList.subjects.length;
            this.busy = true;
            fetchMoviesByType(this.type, start)
              .then(res => {
                    this.busy = true;
                    console.log(res.data);
                    this.movieList.title = res.data.title;
                    this.movieList.total = res.data.total;
                    this.movieList.subjects = this.movieList.subjects.concat(res.data.subjects);
                    if (this.movieList.subjects.length > 0) {
                        this.loading = false;
                    }
                    if (this.movieList.subjects.length < this.movieList.total) {
                        this.busy = false;
                    }
              });

          }
        }
    }
</script>
