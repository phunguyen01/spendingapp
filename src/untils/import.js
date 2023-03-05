// Để to đến page mà không cần load lại trang từ đầu do vue cung cấp
import { defineAsyncComponent } from "vue";
export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
}
