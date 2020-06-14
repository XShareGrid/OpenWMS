<template>
  <div class="app-container">
    <div class="wms-tool-view">
      <span class="title">管理库区库位</span>
      <div class="tool_menu">
        <el-button plain>确定</el-button>
        <el-button plain>取消</el-button>
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
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            fixed
            prop="wCode"
            label="库位编码">
        </el-table-column>
        <el-table-column
            prop="state"
            label="库位状态">
        </el-table-column>
        <el-table-column
            prop="type"
            label="库位类型">
        </el-table-column>
        <el-table-column
            prop="types"
            label="容器类型">
        </el-table-column>
        <el-table-column
            prop="count"
            label="容量">
        </el-table-column>
        <el-table-column
            prop="sortable"
            label="可存物品">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ReservoirLocation extends Vue {
  public  tableData = Array();

  public mounted(): void {
    for (let i = 0; i < 10; i++) {
      const data = {
        wCode: 'A-' + i,
        state: '可用',
        type: '货架',
        types: '箱 100x60',
        count: i + 1 + '0',
        sortable: '防护口罩',
      };
      this.tableData.push(data);
    }
  }
}
</script>

<style scoped>

</style>
