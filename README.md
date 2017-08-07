```
HTTP库采用了axios。
列表下拉加载更多数据使用了vue-infinite-scroll


// 图片延迟加载
// 无限滚动
// vue-router
// vuex
```

## 项目运行

> clone项目到本地，进入项目文件夹，安装依赖

```
git clone
cd
npm install
```

> 然后运行项目

```
npm run dev
```

> 接着运行 node, 启动服务, 注意：这一步的 node 转发服务一定要启动，要不然无法正常访问豆瓣 API

```
cd proxy
node index.js

//启动成功后，将看到输出
// HTTP Server is running in http://127.0.0.1:8082
```

> 最后打开浏览器，输入localhost:8080即可访问


## 路由

> 应用包括下面4个路由

* `/movies` 首页，包含正在上映榜单和即将上映榜单的电影信息
* `/movie-list` 榜单列表页面，显示榜单列表信息;
* `/movie/subject/:id` 电影详情页面；
* `/movie/search` 电影搜索列表页面。




# 项目结构
```javascript
.
├── README.md
├── build // vue-cli 自带的配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config  // vue-cli 自带的配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── git.sh
├── index.html
├── proxy  // node 转发API请求，解决跨域问题
│   └── index.js
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── list.scss
│   │   └── reset.scss
│   ├── components
│   │   ├── header.vue
│   │   └── loading.vue
│   ├── main.js // 入口文件
│   ├── router  // 路由
│   │   └── index.js
│   ├── api  // 访问 接口
│   │   └── index.js
│   ├── store
│   │   ├── modules
│   │   │   └── movie.js
│   │   ├── store.js
│   │   └── types.js
│   └── page
│       ├── index.vue
│       ├── movie
│       │   ├── movie-detail.vue
│       │   ├── movie-list.vue
│       │   ├── movies.vue
│       │   └── search-list.vue
│       └── vuex-demo.vue
├── static
└── tree.md
