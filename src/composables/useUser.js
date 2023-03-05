// useUser.js để lưu thông tin củ người dùng, vd: lấy ra bài viết người dùng thích ..
// Giúp quản lý thông tin người dùng tiện hơn

// Để lắng nghe dữ liệu của firebase khi đăng nhập thì dùng hàm onAuthStateChanged do vue cung cấp

import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  if (_user) user.value = _user;
});

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
