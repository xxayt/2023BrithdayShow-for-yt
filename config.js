// https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",
        "心爱的姑娘",
        "今天是你的生日",
        "这是我们在一起的",
        "第三个生日！",
        "这两年多来，我见过你",
        "奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是我喜欢的样子",
        "对了，礼物收全了吗？",
        "今年要吃好好的",
        "喂饱饱的",
        "然后才有力气干活",
        "或者睡觉~",
        "和想我！",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg", //ok
        "心爱的姑娘": "./imgs/2.jpg", //ok
        "今天是你的生日": "./imgs/3.jpg", //ok
        "这是我们在一起的": "./imgs/4.jpg", //ok
        "第三个生日！": "./imgs/disan.jpg",  //ok
        "这两年多来，我见过你": "./imgs/twoyears.jpg", //ok
        "奇怪的样子": "./imgs/qiguai.jpg", //ok
        "可爱的样子": "./imgs/keai.jpg", //ok
        "生气的样子": "./imgs/shengqi.jpg", //ok
        "都是我喜欢的样子": "./imgs/xihuan.jpg", //ok
        "对了，礼物收全了吗？": "./imgs/liwu.jpg",  //ok
        "今年要吃好好的": "./imgs/eatgood.jpg", //ok
        "喂饱饱的": "./imgs/weibao.jpg", //ok
        "然后才有力气干活": "./imgs/ganhuo.jpg",  //ok
        "或者睡觉~": "./imgs/sleep.jpg", //ok
        "和想我！": "./imgs/thinkme.jpg", //ok
        "生日快乐~~": "./imgs/happybirthday.jpg" //ok
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Let's go!",
        play: "搞点音乐？",
        bannar_coming: "上点颜色？",
        balloons_flying: "好像少点东西？",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的xxayt先生~'
};
