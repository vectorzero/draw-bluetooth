import { App } from 'vue'
import { ElIcon, ElLoading, ElCard, ElButton, ElInput } from 'element-plus'

export default function importUiFramework(app: App) {
  // 按需载入 Element Plus 组件
  app.use(ElButton).use(ElCard).use(ElLoading).use(ElIcon).use(ElInput)
  return app
}
