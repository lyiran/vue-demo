// var Mock = require('mockjs');
import Mock from 'mockjs';

Mock.mock(/getNewsList/, {
  'list|5': [
    {
      url: '@url',
      title: '@ctitle(5, 20)'
    }
  ]
});

Mock.mock(/login/, {

});


