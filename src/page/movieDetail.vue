<template>
    <div>
        <div class="detail-card" v-if='movie.title'>
          <div class="title">{{movie.title}}</div>
          <div>
            <img :src="movie.images['large']"  width='100%'>
          </div>
          <section class='subject-info'>{{getMeta}}</section>
          <section class='subject-mark'>
            <a><span>想看({{movie.reviews_count}})</span></a>
            <a><span>看过({{movie.wish_count}})</span></a>
          </section>
          <section class="subject-intro">
            <h2>{{movie.title}}的剧情介绍</h2>
            <div class="bd">
              <p>
                {{movie.summary}}
              </p>
            </div>
          </section>
        </div>
        <loading :show='loading'></loading>
    </div>
</template>
<script>
    import Loading from '../components/loading.vue';
    import {fetchMovieById} from '../api';


    export default {
        'name' : 'movie-detail',
        data(){
            return {
                loading : true,
                movie : {},
                id : ''
            }
        },
        components: { Loading:Loading },
        computed: {
            getMeta () {
                var cast = this.movie.casts.reduce( (name, value) => {
                    return name ? name + ' / ' + value.name : value.name;
                }, '');
              return this.movie.countries.join(' / ') + ' / ' + this.movie.genres.join(' / ') + ' / ' + this.movie.directors[0].name + '(导演) / ' + cast;
            },
        },
        mounted () {
            this.id = this.$route.params.id;
            fetchMovieById (this.id).then( res => {
              console.log(res.data);
              this.movie = res.data;
              this.loading = false;
            });
        }
    }
</script>
<style scoped lang='less'>

  .detail-card {
    background: #fff;
    border-radius: 10px;
    padding: 10px 15px;
    .title {
      font-size: 16px;
      line-height: 32px;
      word-break: break-all;
    }
    section {
      margin-bottom: 30px;
    }
    p {
      font-size: 15px;
      color: #494949;
      line-height: 1.5;
    }
    .subject-info {
      position: relative;
      overflow: hidden;
      margin-top: 10px;
      line-height: 1.5;
    }
    .subject-mark {
        display: flex;
        a {
          height: 30px;
          line-height: 30px;
          display: block;
          border: 1px solid #ffb712;
          border-radius: 3px;
          margin-right: 10px;
          color: #ffb712;
          font-size: 15px;
          text-align: center;
          flex: 1;
        }
    }
    .subject-intro {
      h2 {
        color: #aaa;
        margin: 0 0 15px;
        font-size: 15px;
      }
    }
  }
</style>
