// Giá trị tổng hợp là các hàm sử dụng API tổng hợp để triển khai.
// logic phản ứng và có thể sử dụng lại.
import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}
