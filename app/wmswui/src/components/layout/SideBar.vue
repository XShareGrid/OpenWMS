<template>
    <div class="wms-sidebar">
        <el-menu default-active="wareList"  active-text-color="#0079FE"
                 class="el-menu-vertical-wms wms-scroll-styl"
                 @open="handleOpen"
                 @close="handleClose"
                 @select="routerPath"
                 :collapse="isCollapse">
            <el-submenu index="wareManage">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">仓库管理</span>
                </template>
                <el-menu-item index="wareList">
                    <span slot="title">仓库</span>
                </el-menu-item>
                <el-menu-item index="index">
                    <span slot="title">库存</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-files"></i>
                    <span slot="title">货物管理</span>
                </template>
                <el-menu-item index="index">
                    <span slot="title">货物</span>
                </el-menu-item>
                <el-menu-item index="index">
                    <span slot="title">货主</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const that = Vue.prototype;
@Component
export default class SideBar extends Vue {
    public baseRouter = '/wareManage/';
    public isCollapse = false;
    public handleOpen(key: string, keyPath: string) {
        console.log(key, keyPath);
        this.baseRouter = '/' + keyPath + '/';
    }
    public handleClose(key: string, keyPath: string) {
        console.log(key, keyPath);
    }
    public routerPath(index: any) {
        if (this.$route.path.indexOf(index) !== -1) {
            return;
        }
        this.$router.push({
            path: this.baseRouter + index,
            query: {},
        });
    }
}
</script>

<style scoped lang="scss">
    .wms-sidebar {
        min-height: 100%;
        overflow: auto;
    }
    .el-menu-vertical-wms {
        min-height: 100%;
    }
</style>
