import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
// request nên serve khi nào cũng cần có biến lỗi để nhận biết (error)
const error = ref(null);
// isPending là biến lưu trạng thái xem có đang request tới serve ko
const isPending = ref(false);

async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new error("error coud not create a new user.");

    await response.user.updateProfile({ displayName: fullName });

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signup };
}
