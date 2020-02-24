<template>
    <div class="header">
        <div class="container">
            <div class="blog-title">
                <a href="javascript:;">长情驿站</a>
            </div>
            <div class="blog-order">
                <ul>
                    <li><a href="javascript:;">GO基础</a></li>
                    <li><a href="javascript:;">Docker系列</a></li>
                    <li><a href="javascript:;">计算机网络</a></li>
                    <li><a href="javascript:;">数据结构与算法</a></li>
                    <li><a href="javascript:;">关于</a></li>
                </ul>


            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'nav-header',
    }
</script>

<style lang="scss">
    .header{
        height: 50px;
        border-bottom: #e5e5e5 solid 1px;
        background: #F5F5F5;
        margin-right: auto;
        margin-left: auto;
        //position: fixed;
        .container{
            height: 50px;
            width: 1226px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: auto;
            margin-left: auto;
            .blog-title{
                a{
                    font-size: 20px;
                    font-weight: bold;
                    color: #333333;
                }
            }
            .blog-order{
                li{
                    float:left;
                    text-align:center;
                    //width:100px;
                    height:50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-right: 50px;
                    a{
                        color:#333333;
                        &:hover{
                            color: #FF6600;
                        }
                    }

                }
            }
        }
    }
</style>