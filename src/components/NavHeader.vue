<template>
    <div class="header">
        <div class="header-logo"><a href="/#">长情驿站</a></div>
        <div class="header-index">
            <ul>
                <li>首页</li>
                <li>分类</li>
                <li>工具</li>
                <li>关于</li>
                <li>Github</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-header'
}
</script>

<style lang="scss">
    .header{
        height: 70px;
        //line-height: 70px;
        background-color: #333333;
        color: #1C1E21;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 100px;
        padding-right: 100px;
        .header-logo{
            font-size: 18px;
            width: 500px;
            a{
                color: #F5F5F5;
            }
        }
        .header-index{

        }
    }
</style>