<template>
    <div id="input">
        <van-field 
        :label="label" 
        :type="type" 
        :placeholder="placeholder"
        :rule="rule"
        v-model="content" />
    </div>  
</template>

<script>
export default {
    name:'TextInput',
    data() {
        return {
            content:''
        }
    },
    props:['label','type','placeholder','rule'],
    methods:{
        handlerulg() {
            //验证输入是否符合正则表达式
            const rue = new RegExp(this.rule)
            if(rue.test(this.content)) {
                //符合正则表达式
                this.$emit('inputChange',this.content)
            }
        }
    },
    watch:{
        content() {
            this.handlerulg()
        }
    }
}
</script>

<style>

</style>