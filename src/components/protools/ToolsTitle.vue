<template>
  <el-container class="tit_container">
    <el-header height class="title_nav">
      <p>
        <span>互伴营销</span>
        <span>&gt;</span>
        <span class="now_nav">关键词回复</span>
      </p>
    </el-header>
    <el-main class="title_con" height>
      <div class="title_option">
        <div class="left">
          <img src="@/assets/img/ico_keyword.png" alt>
          <div>
            <h2>关键词回复</h2>
            <p>
              <span>价格：</span>
              <span>1200元/年</span>
              <span class="pricestate">免费</span>
            </p>
          </div>
        </div>
        <div class="right">
          <h3>
            生效时间
            <span>1天</span>
          </h3>
          <!-- <div class="control_btn">
            <div class="btn"></div>
          </div>-->
          <el-switch class="ctrl_btn" v-model="delivery"></el-switch>
        </div>
      </div>
      <p
        class="title_desc"
      >开启此功能后，营销工具会根据商户预设的关键词对指定的群进行侦测，当群内发送的信息包含你预设的关键词时，系统会将预设关键词对应的回复内容发送给对方。</p>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "ToolsTitle",
  data() {
    return {
      delivery: true
    };
  }
};
</script>
<style lang="scss">
.tit_container {
  .title_nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
    p {
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #666666;
      height: 16px;
      line-height: 16px;
      span {
      }
      .now_nav {
        color: #af1d31;
      }
    }
  }
  .title_con {
    border: 1px solid #eaecee;
    border-radius: 2px;
    padding: 0;
    .title_option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background-color: #f6f8fa;
      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          display: block;
          width: 60px;
          height: 60px;
          margin-right: 20px;
        }
        div {
          h2 {
            font-family: MicrosoftYaHei;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
            line-height: 26px;
            height: 26px;
            margin-right: 20px;
          }
          p {
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #666666;
            letter-spacing: 0;
            line-height: 26px;
            .pricestate {
              margin-left: 10px;
              font-family: MicrosoftYaHei;
              font-size: 14px;
              color: #af1d31;
              letter-spacing: 0;
              line-height: 26px;
            }
          }
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      .right {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        h3 {
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 20px;
          span {
            color: #af1d31;
          }
        }
        .control_btn {
          width: 50px;
          height: 18px;
          background: #47d15f;
          border-radius: 15.5px;
          background-color: #47d15f;
          margin-left: 42px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          cursor: pointer;
          .btn {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #fff;
            background: #ffffff;
            border: 0 solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05),
              0 2px 2px 0 rgba(0, 0, 0, 0.02), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
          }
        }
        .ctrl_btn {
          margin-left: 42px;

          .el-switch__core {
            width: 50px !important;
            height: 18px !important;
            margin: 0;
            border: none;
            background-color: #47d15f;
            &:after {
              top: -3px;
              left: 0px;
              width: 24px;
              height: 24px;
              border: 0 solid rgba(0, 0, 0, 0.1);
              box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05),
                0 2px 2px 0 rgba(0, 0, 0, 0.02), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
            }
          }
        }
        .is-checked .el-switch__core::after {
          left: 26px;
          margin-left: 0px;
        }
      }
    }
    .title_desc {
      padding: 20px 30px 20px 40px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      color: #666666;
      letter-spacing: 0;
      text-align: justify;
      line-height: 26px;
    }
  }
}
</style>
