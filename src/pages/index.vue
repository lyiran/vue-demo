<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{ product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
<!--       <carousel :navigationEnabled="true" :perPage="1" :autoplay="true">
        <slide v-for="slide in slides" :key="slide.ky">
          <router-link :to="{name: slide.toKey}">
            <img :src="slide.src">
          </router-link>
        </slide>
      </carousel> -->
      <slide-show :slides="slides" :inv="slidespeed"></slide-show>
      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{name: item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import { Carousel, Slide } from 'vue-carousel';
  import axios from 'axios';
  import slideShow from '../components/slideShow.vue';

  export default {
    components: {
      slideShow
    },
    mounted () {
      axios.get('/getNewsList')
      .then((res) => {
        console.log(res);
        this.newsList = res.data.list;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    data () {
      return {
        slidespeed: 4000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: 'detail/forecast'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/publish'
          }
        ],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你更好的找到定位',
            id: 'earth',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达永远快速,保持最前端的技术',
            id: 'loud',
            saleout: true
          },
          {
            title: '攀勇高峰',
            description: '帮你攀勇高峰，到达事业顶峰',
            id: 'hill',
            saleout: false
          }
        ],
        newsList: [
          // {
          //   title: '数据统计',
          //   url: 'http://startcraft.com'
          // },
          //  {
          //   title: '数据预测',
          //   url: 'http://warcraft.com'
          // },
          // {
          //   title: '数据分析',
          //   url: 'http://overwatch.com',
          //   hot: true
          // },
          // {
          //   title: '广告发布',
          //   url: 'http://hearstone.com'
          // }
        ],
        productList: {
          pc: {
            title: 'pc产品',
            list: [
              {
                name: '数据统计',
                url: 'http://startcraft.com'
              },
               {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '数据分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          app: {
           title: '应用类',
           last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twiter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }
        }
      }
    }
  }
</script>

<style scoped>
  .index-wrap {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 30%;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 70%;
  }
  .index-left-block {
    margin: 0 15px 15px 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    border-radius: 10px;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 43%;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 3%;
    margin-right: 2%;
    margin-bottom: 20px;
    border-radius: 0 0 10px 10px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
    line-height: 1.6;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: #c04fb1;
    color: #fff;
    font-size: 12px;
    padding: 0 5px;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .VueCarousel {
    margin-bottom: 10px;
  }
  .VueCarousel-slide {
    position: relative;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
    width: 100%;
  }
  .VueCarousel-slide img {
    width: 100%;
  }
  .VueCarousel-navigation-prev {
    left: 30px !important;
  }
  .VueCarousel-navigation-next {
    right: 30px !important;
  }
  .VueCarousel-pagination {
    position: absolute;
    bottom: 10px;
    z-index: 9;
  }
</style>