<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div class="messages" v-else>
    <ul class="messages-list" ref="messagesListRef">
      <li class="message-item" v-for="doc in documentsComputed" :key="doc.id">
        <span class="time">{{ doc.createdAt }} </span>
        <span class="name">[{{ doc.name }}]</span>
        <p>{{ doc.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from "vue";
import { getCollection } from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    const { documents, error } = getCollection("messages");

    const documentsComputed = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    const messagesListRef = ref(null);
    onUpdated(() => {
      messagesListRef.value.scrollTop = messagesListRef.value.scrollHeight;
    });
    return { documentsComputed, error, messagesListRef };
  },
};
</script>

<style scoped>
.messages {
}
.messages-list {
  display: flex;
  height: 500px;
  flex-direction: column;
  overflow: auto;
}
.message-item {
  font-weight: 600;
  font-size: 15px;
  list-style: none;
  background: white;
  padding: 10px;
  border-radius: 14px;
  width: max-content;
  margin-top: 10px;
}
.message-item p {
  margin: 0;
  margin-top: 2px;
}
.time {
  color: rgb(158, 156, 156);
}
.name {
  margin-left: 6px;
  color: rgb(81, 209, 166);
}
</style>