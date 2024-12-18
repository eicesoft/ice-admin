import router from '@/router';
import NProgress from 'nprogress';
export function SetupRouter(app) {
    router.beforeEach((to, from, next) => {
        // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
        // 如果用户未能验证身份，则 `next` 会被调用两次
        next();
        NProgress.configure({ showSpinner: false, parent: '.layout-container-body' });
        NProgress.start();
    });
    router.afterEach((to) => {
        NProgress.done();
    });
    app.use(router);
}
