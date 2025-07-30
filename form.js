const { createApp, ref } = Vue

createApp({
  setup() {
    const form = ref({
      email: '',
      lastName: '',
      firstName: '',
      submitDate: ''
    })

    const handleSubmit = () => {
      console.log('送信内容：', form.value)
      alert('ご回答ありがとうございました！')
    }

    return {
      form,
      handleSubmit
    }
  },
  template: `
    <div class="form-wrapper">
      <h1>保存用リンク（中部）</h1>
      <p class="desc">
        このフォームを送信する際、ご自身で入力しない限り、氏名やメールアドレスなどの情報は収集されません。
      </p>

      <el-form :model="form" label-position="top">
        <el-form-item label="1. 返信用メールアドレスをご入力ください">
          <el-input v-model="form.email" placeholder="例：taro@example.com" />
        </el-form-item>

        <el-form-item label="2. お名前（姓）をご入力ください">
          <div class="example-text">例：幕張</div>
          <el-input v-model="form.lastName" placeholder="姓を入力してください" />
        </el-form-item>

        <el-form-item label="3. お名前（名）をご入力ください">
          <div class="example-text">例：太郎</div>
          <el-input v-model="form.firstName" placeholder="名を入力してください" />
        </el-form-item>

        <el-form-item label="4. 提出日">
          <el-date-picker
            v-model="form.submitDate"
            type="date"
            placeholder="日付を選択してください"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
            style="width: 100%;"
          />
        </el-form-item>

        <div class="submit-button">
          <el-button type="primary" size="large" @click="handleSubmit">送信</el-button>
        </div>
      </el-form>
    </div>
  `
})
.use(ElementPlus, { locale: ElementPlusLocaleJa }) // ✅ 日語ローカライズ
.mount('#app')
