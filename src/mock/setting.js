import Mock from "mockjs";
import ImagesWX from '@/Images/WeChat.jpg';
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img2.baidu.com/it/u=1840698453,2205982821&fm=26&fmt=auto",
        siteTitle: "帅的被人砍",
        github: "https://github.com/DuYi-Edu",
        qq: "778308168",
        qqQrCode: ImagesWX,
        weixin: "狗帅愣人",
        weixinQrCode: ImagesWX,
        mail: "778308168@qq.com",
        icp: "广ICP备17001719号",
        githubName: "Only_狗帅",
        favicon: "https://img2.baidu.com/it/u=1840698453,2205982821&fm=26&fmt=auto",
    },
});