<template>
    <div class="nav-footer">
        <div class="container">
            <div class="left">
                <a href="https://github.com/liuhanwen1996" target="_blank"><img src="../assets/github.png" height="20px">Github:https://github.com/liuhanwen1996</a>
            </div>
            <div class="left">
                <p><img src="../assets/beian.png" height="20px">备案/许可证编号为：冀ICP备19017112号</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'nav-footer'
    }
</script>

<style lang="scss">
    .nav-footer{
        .container{
            height: 50px;
            width: 1560px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: auto;
            margin-left: auto;
        }
        display: flex;
        height: 48px;
        background-color:black;
        border-top: 1px solid #FF6600;
        //text-align: center;
        font-weight: bold;
        font-size: 12px;
        color: white;
        text-align: center;
        .left{
            a{
                text-align: center;
                font-size: 15px;
                color: #F5F5F5;
            }
            p{
                font-size: 15px;
            }
        }
    }
</style>