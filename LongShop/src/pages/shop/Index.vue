<template>
   <div id="index">
       <div id="index_swipe">
            <van-swipe :autoplay="3000" lazy-render>
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" />
                </van-swipe-item>    
            </van-swipe>
       </div>
   </div>
</template>

<script>
import FootTab from '../../components/shop/FootTab.vue';
import {ref} from "vue"

export default {
    data() {
        return {
            active: ref(0),
            images:[
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]
        };
    },
    created() {
    },
    mounted() {
    },
    components: { FootTab }
}
</script>
<style rel="stylesheet/scss" lang="less" scoped>
#index {
    #index_swipe {
        height:20%;
        width:100%;
    }
}
</style>

