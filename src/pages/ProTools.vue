<template>
  <el-container class="container">
    <el-header class="header" height="4.125rem">
      <!-- Header content -->
      <img src="../assets/img/download.png" alt>
    </el-header>
    <el-main class="main">
      <el-row class="subtitle">
        <el-col :span="24">
          <h2>互伴智能营销</h2>
          <h3>互伴智能营销工具拥有OE码急速报价、关键词自动回复，消息批量推送和微信赋能等功能。商家可根据自身需求进行个性化配置。</h3>
          <h3 class="color-AF1D30">特别提示：活动期间，互伴将全部功能免费开放给商户，您可以随便用！</h3>
        </el-col>
      </el-row>
      <el-row class="subcon" type="flex" justify="space-between">
        <el-col class="item" :sm="{span:11}" :xs="{span:24}">
          <item-keyword></item-keyword>
        </el-col>
        <el-col class="item" :sm="{span:11}" :xs="{span:24}">
          <item-o-e></item-o-e>
        </el-col>
        <el-col class="item" :sm="{span:11}" :xs="{span:24}">
          <item-auto></item-auto>
        </el-col>
        <el-col class="item" :sm="{span:12}" :xs="{span:24}">
          <item-wechat></item-wechat>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>
import $ from "jquery";
import ToolsItem from "@/components/protools/ToolsItem";
import ItemKeyword from "@/components/protools/ItemKeyword";
import ItemOE from '@/components/protools/ItemOE'
import ItemAuto from "@/components/protools/ItemAuto";
import ItemWechat from "@/components/protools/ItemWechat";
export default {
  name: "ProTools",
  components: { ToolsItem, ItemKeyword, ItemAuto, ItemWechat ,ItemOE},
  beforeCreate: function() {
    setRemSize();
    window.addEventListener("resize", setRemSize, false);

    function setRemSize() {
      var clientWidth = document.documentElement.clientWidth;
      var _clientWidth = (clientWidth / 75) * window.devicePixelRatio + "px";
      if (clientWidth > 950) {
        _clientWidth = 16 * window.devicePixelRatio + "px";
      }
      var _clientHeight = document.documentElement.clientHeight + "px";
      document.documentElement.style.fontSize = _clientWidth;
      //console.log($(window).height()+"px")
      $("body").height($(window).height() + "px");
    }
  }
};
</script>

<style lang="scss">
.container {
  padding: 0;
  max-width: 950px;
  margin: 0 auto;
  .color-AF1D30 {
    color: #af1d30 !important;
  }
}
.header {
  padding: 0;
  position: relative;
  margin-bottom: 2.5rem;
  img {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
.main {
  padding: 0;
  .subtitle {
    margin-bottom: 2.5rem;
    h2 {
      font-size: 1.25rem;
      font-family: MicrosoftYaHei;
      color: #333;
      margin-bottom: 0.625rem;
    }
    h3 {
      font-family: MicrosoftYaHei;
      font-size: 0.875rem;
      color: #666666;
      margin-bottom: 0.3rem;
    }
  }
  .subcon {
    flex-wrap: wrap;
    .item {
      width: 29rem;
      height: 14.625rem;
      margin-bottom: 1.25rem ;
    }
  }
}
</style>
