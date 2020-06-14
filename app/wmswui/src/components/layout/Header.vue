<template>
  <div class="header">
    <div class="logo">
      <el-avatar :size="40" :src="circleUrl"></el-avatar>
    </div>
    <span class="pro_title">{{ title }}</span>
    <div class="menu_list">
      <ul>
        <li v-for="(item, i) in menuData" :key="i" v-bind:class="{selected : i == menuIndex}" @click="menuIndex = i">
          <a href="#">{{item}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  public title = 'WMS';
  public circleUrl = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';
  public menuData = ['工作台', 'store 仓库管理', 'user 用户管理', '统计分析', '系统分析'];
  public menuIndex = 0;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../style";
.header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  background-color: #333333;
  color: #fff;
  text-align: left;
  display: flex;
  align-items: center;

  .logo {
    width: 40px;
    height: 40px;
    margin-left: 30px;
  }

  .pro_title {
    display: inline-block;
    max-width: 80px;
    margin-left: 10px;
  }

  .menu_list {
    width: calc(100% - 200px);
    height: 100%;
    padding-left: 50px;
    color: #fff;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      .selected {
        background-color: $--wms-theme-color !important;
      }
      li{
        width: 120px;
        height: 100%;
        text-align: center;
        cursor: pointer;
        &:hover{
          background-color: #999999;
        }
        a{
          color: #fff;
        }
      }
    }
  }
}
</style>
