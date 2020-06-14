<template>
    <div class="app-container">
        <div class="wms-tool-view">
            <span class="title">CK 01仓库</span>
            <div class="tool_menu">
                <el-button plain>刷新</el-button>
                <el-button plain>修改属性</el-button>
                <el-button plain>创建库区</el-button>
                <el-button plain @click="manageHouse">管理库位</el-button>
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
        <!--仓库信息-->
        <div class="ware-house-form">
            <div class="form-item-list">
                <div class="item-files" v-for="(item, inx) in formInfo" :key="inx">
                    <span>{{item.label}}:</span>
                    <input type="text" readonly v-model="item.value">
                </div>
            </div>
            <div class="form-item-list">
                <div class="item-files">
                    <span>联系人:</span>
                    <input type="text" readonly v-model="uName">
                </div>
                <div class="item-files">
                    <span>电话:</span>
                    <input type="text" readonly v-model="phone">
                </div>
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
                        prop="wCode"
                        label="库区编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="库区名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="names"
                        label="库位"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="percent"
                        label="使用率"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="info"
                        label="说明">
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
export default class WareDetails extends Vue {
    public tableData = Array();
    public formInfo = [
        {label: '仓库编码', value: 'CK-01'},
        {label: '仓库名称', value: '原材料仓库'},
        {label: '说明信息', value: '储存原材料'},
        {label: '地址', value: '江西工厂101室'},
    ];
    public uName = '王二';
    public phone = '131****0769';
    public mounted(): void {
        for (let i = 0; i < 10; i++) {
            const data = {
                wCode: 'A' + i,
                name: i + '区',
                names: i + '00',
                percent: i + '%',
                info: '熔喷布堆放',
            };
            this.tableData.push(data);
        }
    }

    public edit(): void {
        this.$router.push({
            path: '/wareManage/reservoirArea',
        });
    }

    public manageHouse(): void {
        this.$router.push({
            path: '/wareManage/wareLocation',
        });
    }
}
</script>

<style scoped lang="scss">
</style>
