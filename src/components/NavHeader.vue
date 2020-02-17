<template>
    <div class="index">
        <div class="container">
            <div class="l-index">
                <a href="javascript:;"><img src="../assets/shouye.png" height="20px">文章</a>
                <a href="javascript:;"><img src="../assets/fenlei.png" height="20px">分类</a>
                <a href="javascript:;"><img src="../assets/source.png" height="20px">资源</a>
                <a href="javascript:;"><img src="../assets/about.png" height="20px">关于我</a>
            </div>
            <div class="r-index">
                <a href="javascript:;"><img src="../assets/login.png" height="20px">登录</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'nav-header'
    }
</script>

<style lang="scss">
    .index{
        height: 55px;
        background-color: black;
        border-bottom: 1px solid black;
    }
    .container{
        width: 1440px;
        height: 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        a{
            display: inline-block;
            color: white;
            margin-right: 80px;
            font-size: 15px;
            //font-weight: bold;
            &:hover{
                    color: #FF6600;
                }
        }
        
    }
    
</style>