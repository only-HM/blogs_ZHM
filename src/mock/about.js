import Mock from 'mockjs';
Mock.mock('/api/about', 'get', {
    code: 0,
    msg: '',
    // data: 'https//www.strml.net',
    data: 'https://baijiahao.baidu.com/s?id=1718812107504330775&wfr=spider&for=pc'
})