<template>
    <div class="nav-footer">
        <div class="container">
            <span><img src="../assets/beian.png" height="20px">备案/许可证编号为：冀ICP备19017112号</span>
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
        height: 55px;
        background-color:black;
        border-bottom: 1px solid black;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            line-height: 30px;
            font-weight: bold;
            font-size: 12px;
            color: white;
            text-align: center;
            margin-left: 600px;
        }
    }
</style>