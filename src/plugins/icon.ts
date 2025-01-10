import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function SetupIcon(app: any) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // console.log('--->', key)
    app.component('V-' + key, component)
  }
}
