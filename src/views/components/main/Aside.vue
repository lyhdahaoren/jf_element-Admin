<template>
    <div class="Aside">
        <el-menu
                :default-active="$route.name"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                background-color="#191a23"
                text-color="#aaa"
                active-text-color="#2d8cf0">
            <el-submenu v-for="item,index in menuList" :index="item.name">
                <template slot="title">
                    <div  @click="jumps(item)">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </div>
                </template>
                <el-menu-item :index="items.name" v-for="items,indexs in item.children" @click="jumps(items)">{{items.meta.title}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import routes from '@/router/routers'
    import {getMenuByRouter} from '@/libs/utils'
    export default {
        name: "Aside",
        props:{
            isCollapse:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                menuList:getMenuByRouter(routes),
            }
        },
        created(){

        },
        methods:{
            jumps(val){
                if(!val.children || (val.children && !val.children.length)){
                    if(val.href){
                        window.location.href = val.href
                    }else{
                        this.$router.push({
                            name:val.name
                        })
                    }
                }
            }
        }
    };
</script>

<style lang="less">
    .el-menu--inline .el-menu-item{
        background: #101117 !important;
    }
    .el-menu-item:not(.is-active):hover{
        color: #fff !important;
    }
    .is-active{
        .el-submenu__title,.el-submenu__title i{
            color: #fff !important;
        }
    }
</style>

<style scoped lang="less">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
    .el-menu-vertical-demo{
        height: 100%;
        overflow-y: auto;
    }
    .Aside{
        position: fixed;
        left: 0;
        z-index: 100;
        top: 0;
        height: 100%;
    }
</style>