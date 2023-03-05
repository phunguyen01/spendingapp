<template>
  <form @submit.prevent="onSubmit">
    <!-- main form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="number"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  class="text-xl text-dark w-full outline-none mt-1"
                  type="text"
                  placeholder="Select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More details
      </button>
    </div>

    <!-- detail form -->
    <template v-if="isMoreDetails">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Select a location"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <input
                    id="withPerson"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="With person"
                    v-model="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Upload photo -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-2">
                  <div class="w-full font-semibold">Upload Photos</div>
                  <input
                    id="file"
                    type="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red my-3">{{ errorFile }}</div>
      </div>
    </template>
    <h3 class="text-center text-gray font-medium text-lg" id="record"></h3>
    <div class="text-center p-2">
      <button type="submit" class="bg-primary text-white px-3 py-1 rounded-lg">
        add
      </button>
    </div>
  </form>
</template>
<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorerage from "@/composables/useStorerage";

export default {
  name: "transation-01",
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");
    const { url, uploadFile } = useStorerage("transactions");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const location = ref("");
    const person = ref("");
    const file = ref(null);
    const errorFile = ref(null);

    function onChangeFile(event) {
      const selected = event.target.files[0];
      const typesFile = ["image/png", "image/jpg"];
      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Pleases select a file type png or jpg.";
      }
    }

    async function onSubmit() {
      if (file.value) await uploadFile(file.value);
      console.log("URL File: ", url);
      const { user } = getUser();

      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        person: person.value,
        userId: user.value.uid,
        thumbnail: url.value,
      };

      await addRecord(transaction);

      console.log(error);

      console.log("Created");
      const text = document.createTextNode("Record creation successfully!");
      const h3Node = document.getElementById("record");
      h3Node.appendChild(text);
    }
    return {
      isMoreDetails,
      total,
      category,
      note,
      time,
      person,
      location,
      errorFile,
      onChangeFile,
      onSubmit,
    };
  },
};
</script>
