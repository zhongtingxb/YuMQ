module.exports = { //meetsport
	PROJECT_COLOR: '#55BF9B',
	NAV_COLOR: '#000000',
	NAV_BG: '#ffffff',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '最新通知',
	NEWS_CATE: [
		{ id: 1, title: '最新通知', style: 'leftpic' },
	],
	NEWS_FIELDS: [

	],

	ENROLL_NAME: '场地',
	ENROLL_CATE: [
		{ id: 1, title: '网球场' },
		{ id: 2, title: '羽毛球场' },
		{ id: 3, title: '乒乓球场' },
		{ id: 4, title: '篮球场' },
		{ id: 5, title: '足球场' },
		{ id: 6, title: '舞蹈室' },
		{ id: 7, title: '活动室' },
		{ id: 8, title: '排练房' },
		{ id: 9, title: '棋牌室' },
		{ id: 10, title: '桌球室' },
		{ id: 11, title: '练功房' },
		{ id: 12, title: '自习室' },
		{ id: 13, title: '办公室' },
		{ id: 14, title: '会议室' },
		{ id: 15, title: '放映厅' },
	],
	ENROLL_FIELDS: [


	],
	ENROLL_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
	],

	ENROLL_TIME_NODE: {
		mark: 'mark-no',
		start: 9, //开始
		end: 22, // 结束
		price: 0, //价格 
		succ: false //是否已预订 
	},
	ENROLL_DAY_NODE: [
		{
			mark: 'mark-no',
			start: 9, //开始
			end: 21, // 结束
			price: 0,
			succ: false
		},
	],


}