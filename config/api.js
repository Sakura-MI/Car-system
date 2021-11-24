// const rootUrl = 'https://www.cremecong.top/api/v1';
// const rootUrl = 'http://192.168.123.69:3000/api/v1';
const rootUrl = 'http://139.9.196.99:3000/api/v1';
const wsUrl = 'ws://localhost:3000/api/v1';
const ocrUrl = 'http://localhost:5000'

module.exports = {

  WebsocketConnect : wsUrl + "/ws",            //聊天

  Login: rootUrl+ "/user/login",               //用户登陆
  UserInfo : rootUrl + "/user/show",           //返回用户信息
  CheckToken :rootUrl+"/ping",                 //检查token
  BindEmail : rootUrl+ "/user/vaild-email",    //解绑定邮箱
  GetCode : rootUrl + "/user/get-code",        //获取验证码
  BindPhone : rootUrl + "/user/phone",   //解绑定手机
  GetTopic : rootUrl + "/topic",           //获取分类//获取话题
 
  CreateSocial : rootUrl +"/social-create",      //创建帖子
  GetSocial: rootUrl + "/social",             //获取社区帖子
  GetMySocial:rootUrl+"/social-my",          //获取我的帖子
  GetSocialDetail : rootUrl + "/social-detail/",     //获取详情

  Upload : rootUrl + "/upload",                   //上传照片文件

  GetCarInfo : rootUrl + "/cars/",                //获取车辆信息 
  NoBindCar : rootUrl +"/car/",                   //解绑车辆
  CreateCar :rootUrl + "/cars",                   //绑定车
  FindUserByCar:rootUrl+"/car" ,  

  GetComment : rootUrl +"/comment/get-all/",      //获取某个帖子下的评论
  CreateComment : rootUrl +"/comment/create-comment",   //发表评论
  DeleteComment : rootUrl + "/comment/delete-comment",  //删除评论

  GetMyFriends : rootUrl+"/friend-all",             //获得我的伙伴  ，获取全部好友
  GetMyFriendInfo : rootUrl +"/friend/",        //查看好友页面 RESTful
  DeleteMyFriend : rootUrl+ "/friend/",       //删除好友     
  CreateMyFriend : rootUrl + "/friend/",      //创造好友
  
  GetMessageInfo :rootUrl + "/get-user-id/",            //获取聊天内容
  GetMessageList :rootUrl + "/MessageIndex/",           //获取聊天最新列表


  OcrCar : ocrUrl + "/upload"       //ocr    

}