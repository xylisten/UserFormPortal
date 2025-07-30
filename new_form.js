// 新增：解析 URL 参数并输出
function logUrlParams() {
  const params = new URLSearchParams(window.location.search)
  const token = params.get('token')
  const email = params.get('email')
  const userName = params.get('userName')
  console.log('token:', token)
  console.log('email:', email)
  console.log('userName:', userName)
}
logUrlParams()

const { createApp, ref } = Vue

createApp({
  setup() {
    const form = ref({
      email: '',
      fullName: '',
      fullNameKana: '',
      birthDate: '',
      phone: '',
      mobile: ''
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
      <h1>新規ユーザー登録</h1>
      <p class="desc">
        必要事項をご入力の上、送信してください。
      </p>

      <el-form :model="form" label-position="top">
        <el-form-item label="1. E-mail">
          <el-input v-model="form.email" placeholder="例：taro@example.com" />
        </el-form-item>

        <el-form-item label="2. 氏名">
          <el-input v-model="form.fullName" placeholder="例：幕張 太郎" />
        </el-form-item>

        <el-form-item label="3. 氏名（半角カナ）">
          <el-input v-model="form.fullNameKana" placeholder="例：ﾏｸﾊﾘ ﾀﾛｳ" />
        </el-form-item>

        <el-form-item label="4. 生年月日">
          <el-date-picker
            v-model="form.birthDate"
            type="date"
            placeholder="日付を選択してください"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
            style="width: 100%;"
          />
        </el-form-item>

        <el-form-item label="5. 電話番号">
          <el-input v-model="form.phone" placeholder="例：03-1234-5678" />
        </el-form-item>

        <el-form-item label="6. 携帯番号">
          <el-input v-model="form.mobile" placeholder="例：090-1234-5678" />
        </el-form-item>

        <div class="submit-button">
          <el-button type="primary" size="large" @click="handleSubmit">送信</el-button>
        </div>
      </el-form>
    </div>
  `
})
.use(ElementPlus, { locale: ElementPlusLocaleJa })
.mount('#new-user-app')
