<template>
    <div class="login-page">
        <div class="containe">
            <div class="form-logo">
                <div class="username">
                    用户：
                    <Input v-model="value" style="width: 300px" />
                </div>
                <div class="password">
                    密码：
                    <Input v-model="value18" type="password" password style="width: 300px" />
                </div>
                <div class="form-bottom">

                </div>

            </div>
            <div class="form-data">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="scss">
    .login-page{
        background: #e5e5e5;
    }
    .username{
        margin-top: 200px;
    }
</style>