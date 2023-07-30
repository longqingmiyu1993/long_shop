<template>
   <div id="index">
       <div id="index_swipe">
            <van-swipe :autoplay="3000" lazy-render id="van_swipe">
                <van-swipe-item v-for="image in images" :key="image" id="van_swipe_item">
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
       #van_swipe{
            #van_swipe_item{
                height: 100px;
                width:100%;
            }
       }
    }
}
</style>

