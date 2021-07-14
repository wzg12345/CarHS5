<template>
    <div class="Search">
        <div class="content">
            <div class="input_box">
                <input type="text" placeholder="请输入关键词搜索">
                <img src="common/common_off.png" alt="" class="cancel">
            </div>
            <div class="high_search">
                <div class="button_group">
                    <h5>高频搜索</h5>
                    <i class="arrow_down"></i>
                    <img src="common/common_delete.png" alt="" class="delete">
                </div>
                <div class="keywords">
                    <ul>
                        <li v-for="(item,index) in 3" :key="index" :class="index == 0 ? 'active' : ''">关键词语</li>
                    </ul>
                </div>
            </div>
            <div class="search_list">
                <ul>
                    <li v-for="(item,index) in 4" :key="index" :class="index == 0 ? 'active' : ''"><p>方向盘</p><i></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    module.default = {
        name: "search"
    }
</script>

<style scoped>
    .Search {
        width: 100%;
        height: calc(100% - 1.9rem);
        position: absolute;
        bottom: 0px;
        left: 0px;
    }
    .Search .content {
        width: 60%;
        height: 100%;
        margin: 0 0 0 8.5%;
    }
    .Search .content .input_box {
        float: left;
        margin-top: .3rem;
        margin-bottom: .36rem;
        width: 100%;
        height: .68rem;
        background: rgba(56,80,119,.15);
        border: 1px solid rgba(197,223,255,.5);
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        display: flex;
        flex-direction: row;
        position: relative;
    }
    .Search .content .input_box::before {
        content: '';
        width: .41rem;
        height: .41rem;
        background-image: url("../common/common_search.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: .15rem;
        left: .26rem;
    }
    .Search .content .input_box input {
        width: calc(100% - .97rem);
        height: 100%;
        background: none;
        border: none;
        text-indent: .95rem;
        font-size: .28rem;
        color: #83878e;
    }
    .Search .content .input_box .cancel {
        width: .42rem;
        margin: auto;
    }
    .Search .content .high_search {
        clear: both;
    }
    .Search .content .high_search .button_group {
        display: flex;
        flex-direction: row;
    }
    .Search .content .high_search .button_group h5 {
        width: 87%;
        font-size: .28rem;
        color: #bfbfbf;
    }
    .Search .content .high_search .button_group .arrow_down {
        width: .3rem;
        height: .3rem;
        margin-right: .58rem;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        border-left: .03rem solid #b4b3b4;
        border-bottom: .03rem solid #b4b3b4;
    }
    .Search .content .high_search .button_group .delete {
        width: .36rem;
    }
    .Search .content .high_search .keywords {
        margin-top: .22rem;
    }
    .Search .content .high_search .keywords ul li {
        width: 1.88rem;
        height: .58rem;
        float: left;
        margin-right: .56rem;
        margin-bottom: .2rem;
        background: rgba(131,135,142,.1);
        border: 1px solid #2c343e;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        text-align: center;
        line-height: .58rem;
        font-size: .28rem;
        font-weight: bold;
    }
    .Search .content .high_search .keywords ul li.active {
        color: #83baff;
    }
    .Search .content .search_list {
        clear: both;
        display: none;
        height: calc(100% - 1.7rem);
        overflow-y: scroll;
        -webkit-overflow-scrolling:touch;
    }
    .Search .content .search_list ul li {
        position: relative;
        font-size: .28rem;
        padding-bottom: .15rem;
        margin-bottom: .15rem;
        border-bottom: 1px solid rgba(197, 223, 255, 0.5);
    }
    .Search .content .search_list ul li::after {
        content: '';
        width: .2rem;
        height: .2rem;
        position: absolute;
        top: .14rem;
        right: .2rem;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
        border-left: .02rem solid #b4b3b4;
        border-bottom: .02rem solid #b4b3b4;
    }
    .Search .content .search_list ul li.active {
        color: #83baff;
    }
    .Search .content .search_list ul li.active::after {
        content: '';
        border-left: .02rem solid #83baff;
        border-bottom: .02rem solid #83baff;
    }
</style>
