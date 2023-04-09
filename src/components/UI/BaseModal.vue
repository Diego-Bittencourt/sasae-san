<template>
    <Transition name="modal">
        <div v-if="showModal"
            class="top-0 left-0 fixed z-50 w-screen h-screen bg-black bg-opacity-80 flex flex-col justify-center content-center transition-opacity duration-300">
            <div class="max-w-xl self-center modal-window">
                <color-gradient>
                    <div class="text-3xl text-white my-10 text-center p-8 bg-black">{{ props.message }}</div>
                </color-gradient>
                <base-button @click="hideModal" class="mt-10">Close</base-button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { authStore } from '../../stores/auth';

const auth = authStore()

const props = defineProps(['message'])

const hideModal = () => {
    auth.hideModal()
}

const showModal = computed(() => {
    console.log(auth.isModalOn)
    return auth.isModalOn
})

</script>

<style scoped>

</style>