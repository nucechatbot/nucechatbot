module.exports = {
  // NUICHATBOT TOKEN
  NCB_TOKEN : 'NUIEAAI8rwmZBnjIBALDzsE81dyQuII4C6rZB89LVNZBJiGCJsPsIpPvxR05dDXU3uwj9dXqg7LaAvG2t4L1nAT43LvNBIJulFDzW6ZC79S1ndqpXPC6vlf2ugVCBYZAH0h9EbmtHgGEEZCxicxMfI6ncIfZAWdSRhM8BNpDvrFV0ZAV1uMIOGC2UXGLUCVaz1s9pHoZD',

  // HEROKU STUFFS
  APP_NAME : 'nucechatbot',
  HEROKU_API_KEY : 8a96047c-70ba-4b03-889f-d588021ab017,

  // MONGODB SETUP
  DB_CONFIG_URI : 'mongodb+srv://Cluster0:<MinhViet1%40%0A>@cluster0-jdmeb.mongodb.net/DB_NAME?retryWrites=true&w=majority
',
  DB_NAME : 'nucechatbot',

  // ANALYTICS
  HAS_POST_LOG : false,
  POST_LOG_ID : '',
  POST_LOG_P1 : '',
  POST_LOG_P2 : '',
  POST_LOG_NAME1 : '',
  POST_LOG_NAME2 : '',

  // GOOGLE FORMS
  REPORT_LINK : '',

  // OTHERS
  MAX_PEOPLE_WAITROOM : 20,   // Số người tối đa trong phòng chờ
  MAX_WAIT_TIME_MINUTES : 60, // Số phút tối đa 1 người đc phép trong phòng chờ.
                              // Đặt 0 để cho phép đợi bao lâu cũng đc

  // ADMIN
  ADMIN_PASSWORD : 'MinhViet1q',            // Password để login vào trang admin
  MAX_SESSION_MINUTES : 30,       // Thời gian 1 session
  DEV_ID : 0,
  VERSION : require('project-version')
};
