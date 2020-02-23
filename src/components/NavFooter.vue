<template>
    <div class="nav-footer">
        <div class="container">
            <div class="left">
                <a href="https://github.com/liuhanwen1996" target="_blank"><img src="../assets/github.png" height="20px">Github</a>
            </div>
            <div class="left">
                <a href="javascript:;"><img src="../assets/beian.png" height="20px">备案/许可证编号为：冀ICP备19017112号</a>
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
        display: flex;
        height: 55px;
        background-color:black;
        border-top: 2px solid #FF6600;
        justify-content: space-between;
        //text-align: center;
        font-weight: bold;
        font-size: 12px;
        color: white;
        text-align: center;
        .left{
            a{
                text-align: center;
            }
        }
    }
</style>