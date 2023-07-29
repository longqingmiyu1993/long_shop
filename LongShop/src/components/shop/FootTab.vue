<template>
    <van-tabbar v-model="active" active-color="#1ABC9C" inactive-color="#778899">
            <van-tabbar-item icon="wap-home-o">
                <router-link to="/index">首页</router-link>    
            </van-tabbar-item>
            <van-tabbar-item icon="apps-o">
                <router-link to="/sort">分类</router-link>    
            </van-tabbar-item>
            <van-tabbar-item icon="orders-o">
                <router-link to="/news">消息</router-link>    
            </van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">
                <router-link to="/car">购物车</router-link>    
            </van-tabbar-item>
            <van-tabbar-item icon="user-o">
                <router-link to="/me">我的</router-link>    
            </van-tabbar-item>
        </van-tabbar>
</template>

<script>
export default{
    name: 'FootTab',
    props:{
       activeIndex:{
        type: String,
        default:'索引项'
       } 
    }
}

</script>

<style scoped></style>
