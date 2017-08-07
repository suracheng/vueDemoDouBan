<template>
    <div id="TalionNav">
        <header class="TalionNav">
          <div class="TalionNav-primary">
            <a href="/" class="logo"><h1>豆瓣</h1></a>
            <nav>
              <ul>
                <li><a href="#/movies" style="color: #2384E8;">电影</a></li>
                <li><a href="/book" style="color: #9F7860;">图书</a></li>
              </ul>
              <span class="search"></span>
            </nav>
          </div>
        </header>

        <div class="search">
          <input type="text" class="search-input" name="search" placeholder="请输入搜索内容" @keyup.enter="search()" v-model.trim='query'/>
          <img src="../images/search-btn.png" class="search-btn" @click="search()"/>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                query: '',
                path: 'search-movie'
            }
        },
        mounted () {
          if (this.$route.path === 'index' || this.$route.path.indexOf('movie')) {
            this.path = '/movie/search';
          }
        },
        computed: {},
        components: {},
        methods: {
            search () {
              this.$router.push({path: this.path, query : {query : this.query}});
              this.query = "";
            }
        }
    }
</script>
<style scoped lang='less'>
  .TalionNav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
    .TalionNav-primary {
      border-bottom: 1px solid #f3f3f3;
      padding: 0 18px;
      background: #fff;
      height: 47px;
      line-height: 47px;
      box-sizing: border-box;
      font-size: 15px;
      nav {
        float: right;
        li {
          display: inline-block;
          width: 40px;
          text-align: center;
        }
      }
      .logo h1 {
        margin: 0;
        padding: 0;
        color: #00b600;
        font-size: 20px;
        background-size: cover;
        height: 100%;
        line-height: 46px;
        width: 46px;
        display: inline-block;
      }
      .title {
        color: #2384E8;
      }
      h1 {
        margin: 0;
        padding: 0;
        color: #00b600;
        font-size: 0;
        background-size: cover;
        height: 22px;
        width: 46px;
        display: inline-block;
      }
      .search {
        font-size: 0;
        background-color: paleturquoise;
        background-size: cover;
        width: 24.57px;
        height: 18.28px;
        margin-top: 4px;
        position: relative;
      }
    }
  }

  .search {
    background: #fff;
    margin-top: 47px;
    position: relative;
    .search-input {
      border: 0;
      outline: 0;
      background: #f5f5f5;
      padding: 10px 5px;
      width: 100%;
      font-size: 12px;
      box-sizing: border-box;
    }
    .search-btn {
      width: 20px;
      position: absolute;
      right: 5px;
      top: 9px;
    }
  }

</style>
