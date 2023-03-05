import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
// request nên serve khi nào cũng cần có biến lỗi để nhận biết (error)
const error = ref(null);

async function logout() {
  error.value = null;
  try {
    const response = await projectAuth.signOut();

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}
export function useLogout() {
  return { error, logout };
}
