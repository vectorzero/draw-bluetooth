import { App } from 'vue'
import {
  locale,
  ElIcon,
  ElLoading,
  ElCard,
  ElButton,
  ElInput,
  ElTag,
  ElForm,
  ElFormItem,
  ElColorPicker,
  ElMenu,
  ElMenuItem,
  ElSelect,
  ElOption
} from 'element-plus'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
locale(lang)

export default function importUiFramework(app: App) {
  // 按需载入 Element Plus 组件
  app
    .use(ElButton)
    .use(ElCard)
    .use(ElLoading)
    .use(ElIcon)
    .use(ElInput)
    .use(ElTag)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElColorPicker)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElSelect)
    .use(ElOption)
  return app
}
