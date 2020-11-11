/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

/* 本地配置 */
// var host = 'https://xggpc.gongsibao.com'

var host = 'http://192.168.18.105:3013'

var config = {
  // 用户相关接口
  // 首页 简报
  dataChart: `${host}/web/all/merchantCtl/dataChart`,
  // 电子签&交易数据统计
  dataSummarize: `${host}/web/all/merchantCtl/dataSummarize`,
  // 首页下拉框
  tenantSel: `${host}/web/all/merchantCtl/tenantSel`,
  // 图片验证
  captcha: `${host}/web/common/captchaCtl/captcha`,
  // 获取oss参数地址
  getOssConfig: `${host}/web/common/metaCtl/getOssConfig`,
  // // 短信验证
  smsCode: `${host}/web/auth/userCtl/smsCode`,
  // // 当前用户信息查询
  currentUser: `${host}/web/auth/userCtl/currentUser`,
  // // 登录
  login: `${host}/web/auth/userCtl/login`,
  // // 获取菜单
  getMenu: `${host}/web/auth/userCtl/getMenu`,
  // 旧接口 --------------------------------------
  // 商户管理 -- 商户列表
  merchantCtlList: `${host}/web/all/merchantCtl/allList`,
  // 招工管理 -- 招工需求
  recruitCtlList: `${host}/web/all/recruitCtl/allList`,
  // 签约管理 --电子签约
  electronicContractCtlList: `${host}/web/all/electronicContractCtl/allList`,
  // 工单管理 -- 工作量确认单
  loadCtlList: `${host}/web/all/loadCtl/allList`,
  // 交易管理 -- 交易列表
  transactioninCtlList: `${host}/web/all/transactioninCtl/allList`,
  // 完税管理 -- 完税列表
  taxinfoCtlList: `${host}/web/all/taxinfoCtl/allList`,
  // 商户报表 详情
  commercialList: `${host}/web/all/merchantCtl/commercialList`,
  // 商户报表
  commercialCount: `${host}/web/all/merchantCtl/commercialCount`,
  // 个人报表
  commercialCountToList: `${host}/web/all/merchantCtl/commercialCountToList`,
  // 个人报表 详情
  commercialCountToChares: `${host}/web/all/merchantCtl/commercialCountToChares`,
  // 商户发票
  companyPage: `${host}/web/all/invoiceCtl/companyPage`,
  // 我的发票
  myPage: `${host}/web/all/invoiceCtl/myPage`
}

module.exports = config
