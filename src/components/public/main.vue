<template>
    <el-container>
        <jf_Aside :isCollapse="isCollapse"></jf_Aside>
        <el-container :class="!isCollapse ? 'jf_Container' : 'jf_Container jf_Container_Collapse'">
            <el-header class="jf_header">
                <div class="jf_Breadcrumb">
                    <p class="collapse_icon">
                        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="isCollapse = !isCollapse"></i>
                    </p>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="">活动管理</a></el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="jf_user">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </div>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import jf_Aside from '@/views/components/main/Aside'
    export default {
        name: "main_",
        components:{
            jf_Aside
        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                isCollapse:false
            }
        }
    };
</script>

<style scoped lang="less">
    .el-header {
        background-color: #fff;
        color: #333;
        line-height: 60px;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }

    .el-aside {
        color: #333;
    }
    .jf_user{
    }
    .jf_Container{
        padding-left: 200px;
        transition: all .3s ease-in-out;
        .jf_header{
            position: sticky;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 100;
            .jf_Breadcrumb{
                display: flex;
                align-items: center;
                .collapse_icon{
                    font-size: 25px;
                    cursor: pointer;
                    margin-right: 15px;
                }
            }
        }
    }
    .jf_Container_Collapse{
        padding-left: 64px;
    }
</style>