<template>
    <div class="app-container">
        <div class="wms-tool-view">
            <span class="title">仓库列表</span>
            <div class="tool_menu">
                <el-button plain>刷新</el-button>
                <el-button plain>创建仓库</el-button>
                <el-dropdown class="drop-ml">
                    <el-button plain>
                        设置<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>选项一</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="wms-content-mg">
            <el-table
                    :data="tableData"
                    border
                    header-row-class-name="table-row-header-styl"
                    row-class-name="table-row-styl"
                    :stripe="true"
                    style="width: 100%">
                <el-table-column
                    fixed
                    prop="code"
                    label="仓库编码"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="仓库名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="names"
                    label="库区"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="names"
                    label="库位"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="names"
                    label="使用率"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="180">
                    <template slot-scope="scope">
                        <el-button type="text" @click="edit">管理</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component
export default class WareList extends Vue {
    public  tableData = Array();
    public mounted() {
        for (let i = 0; i < 10; i++) {
            const data = {
                code: 'CK0' + i,
                name: '物料仓库',
                names: i,
                address: '上海张江',
            };
            this.tableData.push(data);
        }
    }
    public edit(): void {
        this.$router.push({
            path: '/wareManage/wareDetails',
        });
    }
}
</script>

<style scoped>

</style>
