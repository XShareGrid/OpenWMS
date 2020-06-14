<template>
  <div class="app-container">
    <div class="wms-tool-view">
      <span class="title">CK 01仓库 A库区</span>
      <div class="tool_menu">
        <el-button plain>返回</el-button>
        <el-button plain>刷新</el-button>
        <el-button plain>修改属性</el-button>
        <el-button plain @click="manageReservoir">管理库位</el-button>
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
    <!--库区信息-->
    <div class="ware-house-form">
      <div class="form-item-list">
        <div class="item-files" v-for="(item, inx) in formInfo1" :key="inx">
          <span>{{item.label}}:</span>
          <input type="text" readonly v-model="item.value">
        </div>
      </div>
      <div class="form-item-list">
        <div class="item-files" v-for="(item, inx) in formInfo2" :key="inx">
          <span>{{item.label}}:</span>
          <input type="text" readonly v-model="item.value">
        </div>
      </div>
      <div class="form-item-list">
        <div class="item-files" v-for="(item, inx) in formInfo3" :key="inx">
          <span>{{item.label}}:</span>
          <input type="text" readonly v-model="item.value">
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
            label="库位编码"
            width="150">
        </el-table-column>
        <el-table-column
            prop="state"
            label="库位状态"
            width="150">
        </el-table-column>
        <el-table-column
            prop="type"
            label="库位类型"
            width="150">
        </el-table-column>
        <el-table-column
            prop="types"
            label="容器类型"
            width="150">
        </el-table-column>
        <el-table-column
            prop="count"
            label="容量"
            width="150">
        </el-table-column>
        <el-table-column
            prop="percent"
            label="使用率"
            width="150">
        </el-table-column>
        <el-table-column
            prop="sortable"
            label="可存物品"
            width="180">
        </el-table-column>
        <el-table-column
            prop="saved"
            label="存储物品"
            width="180">
        </el-table-column>
        <el-table-column
            label="操作"
            width="100">
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
export default class ReservoirArea extends Vue {
  public  tableData = Array();
  public formInfo1 = [
    {label: '仓库编码', value: 'CK-01'},
    {label: '仓库名称', value: '原材料仓库'},
    {label: '说明信息', value: '储存原材料'},
    {label: '地址', value: '江西工厂101室'},
  ];
  public formInfo2 = [
    {label: '联系人', value: '王二'},
    {label: '电话', value: '131****0769'},
    {label: '库区编码', value: 'default'},
    {label: '库区名称', value: '默认'},
  ];
  public formInfo3 = [
    {label: '说明信息', value: '仓库全部库位'},
    {label: '库位', value: '300'},
    {label: '使用率', value: '60%'},
  ];
  public mounted(): void {
    for (let i = 0; i < 10; i++) {
      const data = {
        wCode: 'A-' + i,
        state: '可用',
        type: '货架',
        types: '箱 100x60',
        count: i + 1 + '0',
        percent: i + '%',
        sortable: '防护口罩',
        saved: 'N95',
        info: '熔喷布堆放',
      };
      this.tableData.push(data);
    }
  }

  public edit(): void {
    this.$router.push({
      path: '/wareManage/reservoirLocation',
    });
  }

  public manageReservoir(): void {
    this.$router.push({
      path: '/wareManage/reservoirLocation',
    });
  }
}
</script>

<style scoped>

</style>
