//index.js
//获取应用实例
const app = getApp()	

Page({
	data: {
		TopImgList: [
		"http://image.360kad.com/group2/M00/5C/55/CgAgFVrxcyKAW06MAADWYhOblrg982.jpg",
		"http://image.360kad.com/group2/M00/5D/F9/CgAgFFr0FYWALxmzAAGE0otlHPk294.jpg",
		"http://image.360kad.com/group2/M00/5B/EF/CgAgFFrw-kGAIjfPAAEweKBJQrY870.jpg",
		"http://image.360kad.com/group2/M00/5D/52/CgAgFVryyPuAXmVVAAEQbz7YM_c530.jpg",
		"http://image.360kad.com/group2/M00/5B/EB/CgAgFFrw-BCAByx3AAEaE4Opy40257.jpg",
		"http://image.360kad.com/group2/M00/5D/53/CgAgFVryyt6AH9HMAACKrTdOZ28546.jpg",
		"http://image.360kad.com/group2/M00/57/E1/CgAgFFrr2ZKAKsXCAAFNEpJprCA846.jpg",
		"http://image.360kad.com/group2/M00/5B/F2/CgAgFFrw_dWAfw4mAAE0KwbmpxA067.jpg",
		"http://image.360kad.com/group2/M00/5C/56/CgAgFVrxc8mAV7a_AAGbwNC3VyI910.jpg",
		"http://image.360kad.com/group2/M00/5B/6A/CgAgFFrv_yuAT1TPAAFp1xvCEJk502.jpg",
		],
		navList:[
		{
			img:"/images/navli1.png",
			name:"全部分类",
		},
		{
			img:"/images/navli3.png",
			name:"领券中心",
		},
		{
			img:"/images/navli2.png",
			name:"签到有礼",
		},
		{
			img:"/images/navli4.png",
			name:"抢话费",
		},
		{
			img:"/images/navli7.png",
			name:"养生超市",
		},
		{
			img:"/images/navli5.png",
			name:"男士",
		},
		{
			img:"/images/navli8.png",
			name:"成人",
		},
		{
			img:"/images/navli6.png",
			name:"女性",
		},
		],
		scroList:[
		{
			img:"/images/skill-pro.jpg",
			dis_price:"￥39.00",
			pre_price:"￥149.00",
		},
		{
			img:"/images/skill-pro.jpg",
			dis_price:"￥39.00",
			pre_price:"￥149.00",
		},
		{
			img:"/images/skill-pro.jpg",
			dis_price:"￥39.00",
			pre_price:"￥149.00",
		},
		{
			img:"/images/skill-pro.jpg",
			dis_price:"￥39.00",
			pre_price:"￥149.00",
		},
		{
			img:"/images/skill-pro.jpg",
			dis_price:"￥39.00",
			pre_price:"￥149.00",
		},
		{
			img:"/images/skill-pro.jpg",
			dis_price:"￥39.00",
			pre_price:"￥149.00",
		},
		{
			img:"/images/skill-pro.jpg",
			dis_price:"￥39.00",
			pre_price:"￥149.00",
		},
		],
		collageList:[
		{
			img:"/images/puzzle-pro.jpg",
			introduce:"【包邮】正宗山东东阿阿胶东阿阿胶250g山阿阿胶东阿阿胶250东阿阿胶250g山阿阿胶东阿阿胶250东阿阿胶250g山阿阿胶东阿阿胶250g",

		},
		{
			img:"/images/puzzle-pro.jpg",
			introduce:"【包邮】正宗山东东阿阿胶东阿阿胶250g山阿阿胶东阿阿胶250东阿阿胶250g山阿阿胶东阿阿胶250东阿阿胶250g山阿阿胶东阿阿胶250g",

		},
		{
			img:"/images/puzzle-pro.jpg",
			introduce:"【包邮】正宗山东东阿阿胶东阿阿胶250g山阿阿胶东阿阿胶250东阿阿胶250g山阿阿胶东阿阿胶250东阿阿胶250g山阿阿胶东阿阿胶250g",

		},
		],
		goodsList:[
			{
				img:"/images/likepro.jpg",
				intro:"鱼跃 制氧机 YU300 1台",
				dis:"￥39.9",
				pre:"￥59.9",
			},
			{
				img:"/images/likepro.jpg",
				intro:"鱼跃 制氧机 YU300 1台",
				dis:"￥39.9",
				pre:"￥59.9",
			},
			{
				img:"/images/likepro.jpg",
				intro:"鱼跃 制氧机 YU300 1台",
				dis:"￥39.9",
				pre:"￥59.9",
			},
			{
				img:"/images/likepro.jpg",
				intro:"鱼跃 制氧机 YU300 1台",
				dis:"￥39.9",
				pre:"￥59.9",
			},
			]

	},

	onLoad: function () {

	},

	onPullDownRefresh:function(){

	},

	onReachBottom:function(){
		wx.showLoading({
			title: '玩命加载中',
		})
		wx.hideLoading()
	},

})
