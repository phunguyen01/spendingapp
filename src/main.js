import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponents } from "./untils/import";

import { projectAuth } from "./configs/firebase";

let app;
// - Firebase Authentication <=> firebase.auth();
// - Firebase Authentication là tính năng xác thực người dùng bằng Password, số điện thoại.
// hoặc tài khoản Google, Facebook hay Twitter
// - Tính năng này còn cho phép thực hiện chia sẻ ID giữa các ứng dụng một cách dễ dàng.
// - Hàm onAuthStateChanged giúp khởi tạo 1 lần: Lần đầu tiên chưa có "app" nên nó sẽ chạy vào "if" đó
// là đăng ký, lần 2 thằng "app" đã có nên nó sẽ không chạy vào "if" nữa.
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerGlobalComponents(app);
    app.use(router);
    app.mount("#app");
  }
});
