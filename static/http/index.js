const apiReq = {
        req(param) {
        var t = this,
            url = param.url, //路径
            method = param.method, //请求方式
            header = {}, //设置请求的 header，H5端会自动带上cookie不可手动覆盖。
            data = param.data || {}, //请求的参数
            token = "", //token
            hideLoading = param.hideLoading || false, //加载动画
            success = param.success, // 成功回调函数
            fail = param.fail; //表示失败后，要执行的回调函数

        //拼接完整请求地址
        var reqUrl = t.BaseUrl + url;
        //固定参数
        if (!data.token) { //如果参数中无token(除了小程序第一次通过code获取token的接口默认参数token = login,其他接口token参数都是在本地缓存中获取)
            token = uni.getStorageSync('adminToken'); //给token赋值  session会话密钥；从本地获取
            if (!token) { //本地无token需重新登录
                // _self.login(backpage, backtype);
                console.log('没有Token')
                return;
            } else {
                data.token = token;
            }
        }
        //请求方式:GET或POST(POST需配置header: {'content-type' : "application/x-www-form-urlencoded"},)
        if (method) {
            method = method.toUpperCase(); //小写改为大写
            if (method == "POST") {
                header = {
                    'content-type': "application/x-www-form-urlencoded"
                };
            } else {
                header = {
                    'content-type': "application/json"
                };
            }
        } else {
            method = "GET";
            header = {
                'content-type': "application/json"
            };
        }

        var timestamp = Date.parse(new Date()); //时间戳
        data["timestamp"] = timestamp;
        // #ifdef MP-WEIXIN
        data["device"] = "wxapp";
        data["ver"] = "1.1.30";
        // #endif
        // #ifdef APP-PLUS || H5
        data["device"] = "iosapp";
        data["ver"] = "1.0.0";
        // #endif

        //用户交互:加载圈
        if (!hideLoading) {
            uni.showLoading({
                title: '加载中...'
            });
        }

        //网络请求
        uni.request({
            url: reqUrl, //url
            method: param.method || "GET", //请求方式
            header: header || {
                'content-type': "application/json"
            }, //请求头
            data: data, //参数
            success: ((res) => {
                if (res.statusCode === 403 || res.statusCode === 401 || res.statusCode === 404) {
                    // 错误处理
                } else if (res.statusCode === 200) {
                    success(res.data)
                }
            }),

            fail: ((err) => { //返回错误信息
                fail(err)
                // console.log(err)
            }),

            complete: () => { //接口调用结束的回调函数（调用成功、失败都会执行）
                // console.log("网络请求complete");
                if (!hideLoading) {
                    uni.hideLoading();
                }
                return;
            }
        })
    }
}
export default apiReq