import { createPinia } from 'pinia';
export function SetupPinia(app) {
    app.use(createPinia());
}
