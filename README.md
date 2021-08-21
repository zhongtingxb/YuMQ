
### 项目介绍


- 在这里，你会看到最完整的校友名录，一键找到你想找的TA！

- 在这里，你可以了解最新的校友活动，点击报名就可参加心仪的活动！

- 在这里，你能掌握最全的学院资讯，足不出户掌握一手消息！

- 在这里，你可以收到校友专享的招聘信息，为你职业发展添砖加瓦！

- 在这里，你会发现校友互助平台，帮助你对接需求和资源！

 

### 技术使用

项目使用微信小程序平台进行开发。
使用腾讯云开发技术，免费资源配额，	无需域名和服务器即可搭建。
小程序本身的即用即走，适合小工具的使用场景，也适合程序的开发。

### 项目效果截图

![image](https://user-images.githubusercontent.com/89290868/130312252-7830b185-75b0-4716-8bdf-ac01b0445d23.png)
![image](https://user-images.githubusercontent.com/89290868/130312251-7062b2c9-5fbd-42db-a8d6-3909ab489f2d.png)
![image](https://user-images.githubusercontent.com/89290868/130312256-c290103e-3d97-43ed-bb9c-8ab6b8ce454f.png)
![image](https://user-images.githubusercontent.com/89290868/130312259-d1a559e5-ac22-4c18-896c-49a04764cce7.png)
![image](https://user-images.githubusercontent.com/89290868/130312265-6ce10246-226e-476c-a848-b99e223d9d85.png)

![image](https://user-images.githubusercontent.com/89290868/130312262-2a58da23-6a0d-4dde-bc86-ac332c5d27a5.png)
![image](https://user-images.githubusercontent.com/89290868/130312267-99defc99-f383-46b7-8ac6-4095d775e6a1.png)
![image](https://user-images.githubusercontent.com/89290868/130312270-f74143f9-9120-4f2a-a4ba-99a8b4821121.png)
![image](https://user-images.githubusercontent.com/89290868/130312271-0bd08280-90a0-4002-b032-0fc67bb98fbd.png)



### 部署教程：

#### 1 源码解压
 

#### 2 在微信小程序开发工具中导入 解压后的文件夹
![输入图片说明](https://images.gitee.com/uploads/images/2020/1122/060102_2f8d8f02_1810934.png "导入.png")


 

#### 3 开通云开发环境
  参考微信官方文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html

#### 4 数据库操作
建立数据库集合
t_user
t_album
t_info
t_setup

#### 5 云函数及配置
本项目使用到了一个云函数cloud
在云函数cloudfunctions文件夹下选择一个云函数cloud , 右键选择在终端中打开,然后执行 
npm install –product

![输入图片说明](https://images.gitee.com/uploads/images/2020/1122/060144_cb89de4a_1810934.png "云函数.png")



 

打开cloudfunctions/cloud/comm/config.js文件，配置环境ID

![输入图片说明](https://images.gitee.com/uploads/images/2020/1122/060154_ea7c36a1_1810934.png "云函数配置.png")


 


#### 6  客户端配置
打开miniprogram/helper/setting.js文件，配置环境ID

![输入图片说明](https://images.gitee.com/uploads/images/2020/1122/060203_71503106_1810934.png "客户端配置.png")

 


至此完全配置完毕。

#### 在线演示：
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0719/100637_5429f9d1_9240987.jpeg "ccplat-小程序QR.jpg")

 


#### 如有疑问，欢迎骚扰联系我鸭： 
#### 俺的微信:  cclinux0730


