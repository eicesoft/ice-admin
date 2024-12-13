import { createPinia } from 'pinia'

export function SetupPinia(app: any) {
  app.use(createPinia())
}
