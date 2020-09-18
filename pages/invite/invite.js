// pages/invite/invite.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            qrCode: ""
        }
    },
    longpress: function () {
        wx.downloadFile({
            url: "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E7%8B%97&step_word=&hs=0&pn=4&spn=0&di=25223393250&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3382112465%2C4243277534&os=2464441298%2C3520614443&simid=3355577065%2C95065934&adpicid=0&lpn=0&ln=1400&fr=&fmq=1533894684731_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fae51f3deb48f8c54273329d53d292df5e1fe7f6c.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzit1w5_z%26e3Bkwt17_z%26e3Bv54AzdH3Fq7jfpt5gAzdH3Fcbmc98cnbcdncc8ndc_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=",
            success: function (res) {
                console.log(res);
                //图片保存到本地
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function (data) {
                        console.log(data);
                    },
                    fail: function (err) {
                        wx.showToast({

                            title: '成功2',

                        })
                        console.log(err);
                        if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                            console.log('打开设置窗口')
                            wx.openSetting({
                                success(settingdata) {
                                    console.log(settingdata)
                                    if (settingdata.authSetting['scope.writePhotosAlbum']) {
                                        console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                                    } else {
                                        console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                                    }
                                }
                            })
                        }
                    }
                })
            },
            fail: function () {
                wx.showToast({

                    title: 'shibai2',

                })
            }
        })
    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})