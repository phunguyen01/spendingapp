import { ref } from "vue";
import { projectStorerage } from "@/configs/firebase";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();

// request nên serve khi nào cũng cần có biến lỗi để nhận biết (error)
const useStorerage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value}/${file.name}`;

    const fileRef = projectStorerage.ref(filePath.value);

    try {
      const response = await fileRef.put(file);
      url.value = await response.ref.getDownloadURL();
      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }
  return { error, filePath, url, uploadFile };
};
export default useStorerage;
