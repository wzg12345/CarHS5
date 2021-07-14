<template>
    <div class="Manual">
        <div class="content">
            <div class="menu">
                <img src="wk/wk_line1.png" alt="" class="line_top">
                <ul>
                    <router-link v-for="(item,index) in 5" :key="index"  to="" tag="li" :class="index == 0 ? 'active' : ''">驻车和锁车</router-link>
                </ul>
                <img src="wk/wk_line2.png" alt="" class="line_bottom">
            </div>
            <div class="menu_list">
                <div class="list_item">
                    <div class="item">
                        <h5>安全须知</h5>
                        <ul>
                            <router-link to="" tag="li" v-for="(item,index) in 6" :key="index">
                                <div class="thubm"><img src="wk/wk_thubm.jpg" alt=""></div>
                                <p class="name">钥匙信息</p>
                            </router-link>
                        </ul>
                    </div>
                    <div class="item">
                        <h5>仪表组</h5>
                        <ul>
                            <router-link to="" tag="li" v-for="(item,index) in 3" :key="index">
                                <div class="thubm"><img src="wk/wk_thubm.jpg" alt=""></div>
                                <p class="name">钥匙信息</p>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
            <img src="common/common_mask_top.png" alt="" class="mask_top">
            <img src="common/common_mask_bottom.png" alt="" class="mask_bottom">
        </div>
    </div>
</template>

<script>
    module.default = {
        name: "Manual",
    }
</script>

<style scoped>
    .Manual {
        width: 100%;
        height: calc(100% - .9rem);
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .Manual .content {
        width: 87%;
        height: 100%;
        margin: 0 5% 0 8%;
    }
    .Manual .content .mask_top {
        position: absolute;
        top: -.6rem;
        left: 0;
    }
    .Manual .content .mask_bottom {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .Manual .content .menu {
        width: 19%;
        height: 100%;
        padding-left: 2%;
        float: left;
        overflow-y: scroll;
        -webkit-overflow-scrolling:touch;
    }
    .Manual .content .menu .line_top {
        width: .83rem;
        margin-left: -.21rem;
    }
    .Manual .content .menu .line_bottom {
        width: .83rem;
        padding-bottom: .5rem;
        margin-left: -.21rem;
    }
    .Manual .content .menu ul {
        background-image: url("../wk/wk_line3.png");
        background-repeat: repeat-y;
        background-size: 17%;
        background-position: -.22rem 0;
    }
    .Manual .content .menu ul li {
        position: relative;
        font-size: .28rem;
        line-height: .1rem;
        margin-bottom: .75rem;
        text-indent: .55rem;
    }
    .Manual .content .menu ul li:last-child {
        margin-bottom: 0;
    }
    .Manual .content .menu ul li::before {
        content: '';
        width: .21rem;
        height: .06rem;
        background-image: url("../wk/wk_point.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: .02rem;
        left: .01rem;
    }
    .Manual .content .menu ul li.active {
        font-size: .32rem;
        color: #83baff;
    }
    .Manual .content .menu ul li.active::before {
        content: '';
        width: .88rem;
        height: .76rem;
        background-image: url("../wk/wk_light.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: -0.34rem;
        left: -0.31rem;
    }
    .Manual .content .menu::-webkit-scrollbar {
        display: none;
    }
    .Manual .content .menu_list {
        width: 81%;
        height: 100%;
        padding-top: .6rem;
        float: right;
    }
    .Manual .content .menu_list .list_item {
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling:touch;
    }
    .Manual .content .menu_list .list_item::-webkit-scrollbar {
        width: .04rem;
        height: .01rem;
    }
    .Manual .content .menu_list .list_item::-webkit-scrollbar-thumb {
        background: #bfbfbf;
        height: .37rem;
    }
    .Manual .content .menu_list .list_item::-webkit-scrollbar-track {
        background: rgba(255,255,255,.2);
    }
    .Manual .content .menu_list .list_item .item h5 {
        color: #bfbfbf;
        font-size: .32rem;
        clear: both;
        margin-bottom: .3rem;
    }
    .Manual .content .menu_list .list_item .item ul li{
        width: 2.82rem;
        float: left;
        margin-right: .57rem;
        margin-bottom: .42rem;
    }
    .Manual .content .menu_list .list_item .item ul li:nth-child(4n){
        margin-right: 0;
    }
    .Manual .content .menu_list .list_item .item ul li .thubm {
        position: relative;
        width: 100%;
        height: 1.6rem;
        overflow: hidden;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
    }
    .Manual .content .menu_list .list_item .item ul li .thubm > img {
        margin: auto;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
    }
    .Manual .content .menu_list .list_item .item ul li .name {
        text-align: center;
        margin-top: .14rem;
        font-size: .28rem;
    }
</style>
