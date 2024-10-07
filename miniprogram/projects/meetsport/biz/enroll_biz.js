/**
 * Notes: 填报登记模块业务逻辑
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2022-06-24 07:48:00 
 */

const BaseBiz = require('../../../comm/biz/base_biz.js');
const pageHelper = require('../../../helper/page_helper.js');
const cloudHelper = require('../../../helper/cloud_helper.js');
const projectSetting = require('../public/project_setting.js');

class EnrollBiz extends BaseBiz {

	static getCateName(cateId) {
		return BaseBiz.getCateName(cateId, projectSetting.ENROLL_CATE);
	}

	static getCateList() {
		return BaseBiz.getCateList(projectSetting.ENROLL_CATE);
	}

	static setCateTitle(cateId = null) {
		return BaseBiz.setCateTitle(projectSetting.ENROLL_CATE, cateId);
	}


	static async cancelMyEnrollJoin(enrollJoinId, callback) {
		let cb = async () => {
			try {
				let params = {
					enrollJoinId
				}
				let opts = {
					title: '取消中'
				}

				await cloudHelper.callCloudSumbit('enroll/my_join_cancel', params, opts).then(res => {
					pageHelper.showSuccToast('取消成功', 1500, callback);
				});
			} catch (err) {
				console.log(err);
			}
		}

		pageHelper.showConfirm('确认取消? 取消不可恢复', cb);
	}

}

module.exports = EnrollBiz;