<template>
    <van-nav-bar class="pad-hidden" :title="props.title" left-text="返回" left-arrow @click-left="handLeftClick" />
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handLeftClick = () => {
    router.go(-1);
};

const props = defineProps({
    title: String,
});
</script>
<style lang="scss" scoped></style>
