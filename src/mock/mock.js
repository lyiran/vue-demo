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

Mock.mock(/getPrice/, {
  "amount": 678
});

Mock.mock(/getCount/, {
  "amount": 800
});
Mock.mock(/getFocast/, {
  "forecast": 600
});

Mock.mock(/getPublish/, {
  "pubPrice": 450
});

Mock.mock(/createOrder/, {
  "orderID": 1
});
// Mock.mock(/login/, {
//   data: {
//     name: 'user11'
//   }
// });


