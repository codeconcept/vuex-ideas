<template>
  <div>
    <h1>Welcome to Ideas.io</h1>
    <IdeaCreate />
    <Ideas />
  </div>
</template>

<script>
import Ideas from "@/components/Ideas";
import IdeaCreate from "@/components/IdeaCreate";
export default {
  components: { Ideas, IdeaCreate }
};
</script>
