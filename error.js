const { createApp } = Vue

createApp({
  template: `
    <div class="form-wrapper" style="text-align:center;">
      <el-icon color="#f56c6c" style="font-size: 48px; margin-bottom: 16px;">
        <WarningFilled />
      </el-icon>
      <h2 style="color:#f56c6c;">アクセス権限がありません</h2>
      <p class="desc">
        このページを表示する権限がありません。<br>
        管理者にお問い合わせください。
      </p>
    </div>
  `,
  components: {
    WarningFilled: ElementPlusIconsVue.WarningFilled
  }
})
.use(ElementPlus, { locale: ElementPlusLocaleJa })
.use(ElementPlusIconsVue)
.mount('#error-app')
