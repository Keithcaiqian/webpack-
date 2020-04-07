<template>
    <div>
        <p>{{message}}</p>
        <cpn />
    </div>
</template>

<script>
import cpn from './Cpn'
export default {
    data(){
        return{
            message:'App.vue根组件'
        }
    },
    components:{
        cpn
    }
}
</script>