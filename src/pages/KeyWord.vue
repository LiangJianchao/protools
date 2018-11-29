<template>
  <el-container class="container">
    <el-header class="header" height="auto">
      <tools-title></tools-title>
    </el-header>
    <el-main class="main">
      <div id="keyipt">关键词最多输入20个字符，回复内容最多输入140个字符</div>
      <el-header class="main-header" height="auto">
        <div class="left">
          <div class="bar"></div>
          <h2>关键词设置</h2>
        </div>
        <div class="right">
          <p>关键词最多输入20个字符，回复内容最多输入140个字符</p>
        </div>
      </el-header>
      <el-main class="main-con" height="auto">
        <el-table :data="tableData">
          <el-table-column prop="id" label="序号" width="75px" align="center"></el-table-column>
          <el-table-column prop="key" label="关键词" width="180px" align="center">
            <template slot-scope="scope">
              <!-- <p id="keyipt">{{scope.row.key}}</p> -->
            </template>
          </el-table-column>
          <el-table-column prop="msg" label="回复内容" width="=590px" align="center"></el-table-column>
          <el-table-column label="操作" width="105px" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="option">
          <h4 class="info">
            <span>共可设置关键词10条</span>
            <span>
              已设置
              <em>3</em>/10条
            </span>
          </h4>
          <h4 class="warn">编辑内容中不可以出现手机号，请您重新编辑</h4>
          <el-button class="btn" type="primary">保存</el-button>
        </div>
      </el-main>
    </el-main>
  </el-container>
</template>

<script>
import $ from "jquery";
import ToolsTitle from "@/components/protools/ToolsTitle";
//import tinymce from "tinymce";
export default {
  name: "KeyWord",
  components: { ToolsTitle },
  data() {
    return {
      tableData: [
        {
          id: "1",
          key: "丰田本田哈哈哈",
          msg: "do you need 丰田本田"
        }
      ]
    };
  },
  created: function() {
    //console.log(tinymce);
    // var keywordIpt = {
    //   selector: "#keyipt",
    //   menubar: false,
    //   inline: true
    // };
    // tinymce.init(keywordIpt);
  },
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
  .header {
    padding: 0;
  }
  .main {
    padding: 0;
    .main-header {
      padding: 0;
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .bar {
          width: 3px;
          height: 16px;
          background-color: #af1d31;
          margin-right: 16px;
        }
        h2 {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          color: #333333;
          letter-spacing: 0;
          line-height: 20px;
        }
      }
      .right {
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #666666;
        letter-spacing: 0;
      }
    }
    .main-con {
      padding: 0;
      margin-top: 20px;
      .option {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        margin-top: 10px;
        .info {
          font-family: MicrosoftYaHei;
          font-size: 12px;
          color: #666666;
          letter-spacing: 0;
          text-align: center;
          line-height: 20px;
          em {
            color: #af1d31;
          }
        }
        .warn {
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #af1d31;
          letter-spacing: 0;
          margin-top: 8px;
        }
        .btn {
          margin-top: 13px;
          width: 160px;
          height: 40px;
          background: #af1d31;
          border-radius: 2px;
          border: none;
        }
      }
    }
  }
}
</style>
