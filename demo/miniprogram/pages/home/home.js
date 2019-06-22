// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        title: '热门',
      },
      {
        title: '追番',
      },
      {
        title: '游戏',
      },
      {
        title: '娱乐',
      },
      {
        title: '生活',
      }
    ],
    n: 0,
    videoList: [{
        videoID: 0,
        videoImgUrl: 'cloud://wjj-copvb.776a-wjj-copvb/img/003.jpg',
        authorImgUrl: 'cloud://wjj-copvb.776a-wjj-copvb/img/author01.jpg',
        title: '真当我游乐王子不玩B站吗？雨你无瓜！要你寡！',
        categroy: '搞笑',
        categoryID: 0,
        shareImgUrl: '/images/wechat.png',
        author: '游乐王子-袁奇峰',
        commitTime: '6-18'
      },
      {
        videoID: 1,
        videoImgUrl: 'cloud://wjj-copvb.776a-wjj-copvb/img/004.jpg',
        authorImgUrl: 'cloud://wjj-copvb.776a-wjj-copvb/img/author02.jpg',
        title: '三十变十三！毕业季必须拥有的芒果系JK妆容，成为甜甜的山吹女孩',
        categroy: '搞笑',
        categoryID: 0,
        shareImgUrl: '/images/wechat.png',
        author: '机智的党妹',
        commitTime: '6-18'
      }
    ]

  },

  change: function(event) {
    //console.log(event.target.dataset.id);
    this.setData({
      n: event.target.dataset.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})