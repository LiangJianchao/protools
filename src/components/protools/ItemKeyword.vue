<template>
  <el-container class="toolsitem">
    <el-header class="item_header" height>
      <div class="item_img">
        <img src="@/assets/img/ico_keyword.png" alt>
      </div>
      <div class="item_msg">
        <h3>关键词回复</h3>
        <p>
          <span>价格：</span>
          <span class="price">1200元/年</span>
          <span class="pricestatus">免费</span>
        </p>
      </div>
    </el-header>
    <el-main
      height
      class="item_content"
    >开启此功能后，营销工具会根据商户预设的关键词对指定的群进行侦测，当群内发送的信息包含你预设的关键词时，系统会将预设关键词对应的回复内容发送给对方。</el-main>
    <el-footer height class="item_footer">
      <a href="javascript:;">进入>></a>
    </el-footer>
  </el-container>
</template>

<script>
export default{
  name:"ItemKeyword"
}
</script>

<style lang="scss" scoped>
.toolsitem {
  width: 100%;
  height: 100%;
  border: 1px solid #eaecee;
  border-radius: 0.125rem;
  //padding: 0.75rem 0.875rem;
  .item_header {
    display: flex;
    align-items: center;
    padding: 0;
    margin-bottom: 1.25rem;
    padding: 0.75rem 0.875rem 0 0.875rem;
    .item_img {
      img {
        width: 3.75rem;
        height: 3.75rem;
        display: block;
      }
      margin-right: 0.875rem;
    }
    .item_msg {
      h3 {
        text-align: left;
        font-family: MicrosoftYaHei;
        font-size: 1rem;
        color: #333333;
        height: 1.625rem;
        line-height: 1.625rem;
      }
      p {
        text-align: left;
        font-family: MicrosoftYaHei;
        font-size: 0.75rem;
        color: #666666;
        line-height: 1.625rem;
        .pricestatus {
          margin-left: 0.625rem;
          font-family: MicrosoftYaHei;
          font-size: 0.875rem;
          color: #af1d31;
        }
      }
    }
  }
  .item_content {
    padding: 0rem 2.5rem;
    margin-bottom: 0.625rem;
    font-family: MicrosoftYaHei;
    font-size: 0.75rem;
    color: #666666;
    letter-spacing: 0;
    text-align: justify;
    line-height: 1.625rem;
    text-indent: 2em;
  }
  .item_footer {
    height: 1.625rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0.875rem 0.75rem 0;
    a {
      font-family: MicrosoftYaHei;
      font-size: 0.75rem;
      color: #999999;
      letter-spacing: 0;
      line-height: 1.625rem;
    }
  }
}
</style>


