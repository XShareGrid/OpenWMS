<template>
  <div class="app-container">
    <div class="wms-tool-view">
      <span class="title">管理仓库货位</span>
      <div class="tool_menu">
        <el-button plain>新建</el-button>
        <el-button plain>修改</el-button>
        <el-button plain>移除</el-button>
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
            type="selection"
            width="55">
        </el-table-column>
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
            prop="sortable"
            label="可存物品"
            width="180">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            width="100">
        </el-table-column>
        <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="dialogShow = !dialogShow">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--修改仓库库位信息-->
    <el-dialog title="修改库位" :visible.sync="dialogShow" width="30%">
      <el-form :model="form">
        <el-form-item label="库位编码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="库位类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="容器类型" :label-width="formLabelWidth">
          <el-select v-model="form.types" placeholder="请选择库位类型">
            <el-option label="箱100x90" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">取 消</el-button>
        <el-button type="primary" @click="dialogShow = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class WareHouseLocation extends Vue {
  public  tableData = Array();
  public dialogShow = false;
  public formLabelWidth = '100px';
  public form = {
    name: '',
    type: '',
    types: '',
  };
  public mounted(): void {
    for (let i = 0; i < 10; i++) {
      const data = {
        wCode: 'A-' + i,
        state: '可用',
        type: '货架',
        types: '箱 100x60',
        count: i + 1 + '0',
        sortable: '防护口罩',
        status: '修改',
      };
      this.tableData.push(data);
    }
  }

  public editUpdate(): void {
  //
  }
}
</script>

<style scoped>

</style>
