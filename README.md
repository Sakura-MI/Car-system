# Car-Manage-System (mini-program) 

# 车辆信息管理平台 小程序端



**后端**详情看

Golang部分 [Golang](https://github.com/CocaineCong/Car-Manage-System)

Python部分 [Python](https://github.com/Poootato/SoftwareProject)


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210602073619933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70)


# 项目结构目录

```
carSystem/
├── component    
├── config
├── images
├── modules
├── pages
│  ├── auth
│  ├── bindCar
│  ├── bindPhone
│  ├── car
│  ├── chat
│  ├── common
│  ├── firendInfo
│  ├── firends
│  ├── incharge
│  ├── index
│  ├── logs
│  ├── message
│  ├── newsDetail
│  ├── publish
│  ├── publishSuccess
│  ├── reports
│  ├── social
│  ├── template
│  ├── user
└── utils
```





- component ：放一些组件
- config ：存放与后端交互的 api 接口以及一些全局环境的变量
-  images：存放一些静态文件
-  modules：存放聊天的模型，其实这个应该和组件放在一起的
- pages / auth ：用户登陆的验证     
- pages / bindCar：绑定车辆页面    
- pages / bindPhone：绑定手机页面   
- pages / car：我的车库            ----》对完  
- pages / chat：好友聊天列表       ----》聊天模块先不对 
- pages / common：社区页面的组件    ----》先不对 
- pages / firendInfo：好友信息     ---->对完 
- pages / firends：好友列表        ---->对完
- pages / incharge：充电页面      ----》先不对 ---》先不改
- pages / index：主页             ----》对完  ---》改完
- pages / join：??页面            ---》啥页面  ---》先不改
- pages / logs：前端日志打印      ----》对完  ---》不用修改
- pages / message：好友聊天页面   ---》先不对 
- pages / newsDetail：帖子详情页面    ---》对完  ---》改完
- pages / publish：发布帖子          ---》对完 --》改完
- pages / publishSuccess：发布帖子成功  ---》先不对 ----》等对接口完再改
- pages / reports：反馈页面       ---》先不对
- pages / social：社区页面        ---》对完 ---》大部分改完
- pages / SystemInfo：系统消息页面        ---》无
- pages / template ： 搜索页面    ---》无  --->index页面的功能组件
- pages / user：用户个人信息页面   ---》对完
- utils：一些时间转换、ws的工具


#比较疑惑界面
- pages / firendInfo：好友信息     ---->对完 
- pages / firends：好友列表        ---->对完
- pages / chat：好友聊天列表       ----》聊天模块先不对 
- pages / message：好友聊天页面   ---》先不对 
- pages / reports：反馈页面       ---》先不对
- pages / SystemInfo：??页面        ---》无



chat.wxss做了修改







# 部分页面介绍

## pages / index：主页

<img src="https://img-blog.csdnimg.cn/2021060116274051.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70 #pic_center" width="45%" >





## pages / user：用户个人信息页面

<img src="https://img-blog.csdnimg.cn/20210601163755462.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70" width="47%">





## pages / message：好友聊天页面

<img src="https://img-blog.csdnimg.cn/20210601172530128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70" width="47%">





## pages / publish：发布帖子



<img src="https://img-blog.csdnimg.cn/20210601165907562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70" width="47%">





## pages / social：社区页面



<img src="https://img-blog.csdnimg.cn/20210601165725598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70" width="47%">



<img src="https://img-blog.csdnimg.cn/20210601165748755.png?x-oss-
process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70" width="47%">



## pages / newsDetail：帖子详情页面



<img src="https://img-blog.csdnimg.cn/2021060200261436.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTMwNDUwMw==,size_16,color_FFFFFF,t_70" width="47%">







## 总结


如果你喜欢的话可以在右上角点一个`star`~

好了~感谢你的支持！













