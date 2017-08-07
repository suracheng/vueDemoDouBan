<template>
    <section class="grid has-search-bar" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <h2>{{movieList.title}}</h2>
      <div class="card" v-if='movieList.subjects.length > 0'>
          <router-link
            class='item'
            v-for='(item,index) in movieList.subjects'
            :key='index'
            :to="{name : 'movie-detail', params : {id : item.id}}"
          >
            <div class="cover">
              <div class="wp">
                <img v-lazy="item.images.medium" class="img-show">
              </div>
            </div>
            <div class="info">
              <h3>{{item.title}}</h3>
            </div>
          </router-link>
      </div>
      <loading :show='load'></loading>
    </section>
</template>
<script>
    import Loading from '../components/loading.vue';
    import {fetchSearchMovies} from '../api';
    import InfiniteScroll from 'vue-infinite-scroll';

    export default {
        data(){
            return {
              load : true,
              query : '',
              movieList : {
                subjects: []
              },
              busy: false
            }
        },
        directives: { InfiniteScroll },
        components: { Loading },
        mounted () {
            this.query = this.$route.query.query;
        },
        watch : {
            '$route' : 'loadAgain'
        },
        methods: {
          loadAgain () {
              this.busy = false;
              this.movieList.subjects = [];
              this.query = this.$route.query.query;
              this.loadMore();
          },
          loadMore () {
            let start = this.movieList.subjects.length;
            this.busy = true;
            fetchSearchMovies(this.query,start)
              .then(data => {
                console.log(data);
                this.movieList.title = data.data.title;
                this.movieList.total = data.data.total;
                this.movieList.subjects = this.movieList.subjects.concat(data.data.subjects);
                if (this.movieList.subjects.length < this.movieList.total) {
                    this.busy = false;
                }
                this.load = false;
              });
          }
        }
    }
</script>
