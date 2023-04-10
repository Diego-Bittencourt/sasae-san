<template>
    <div v-if="showModal"
        class="top-0 left-0 fixed z-50 w-screen h-screen bg-black bg-opacity-80 flex flex-col justify-center content-center transition-opacity duration-300">
        <div class="max-w-5xl self-center modal-window">

            <color-gradient>
                <Transition name="modal-opening" appear>

                    <div v-if="showModal" class="text-3xl text-white text-center p-8 bg-black overflow-hidden">{{
                        auth.gptAnswer }}</div>

                </Transition>
            </color-gradient>
            <base-button @click="hideModal" class="mt-10">Close</base-button>
        </div>
    </div>
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
    return auth.isModalOn
})

</script>

<style scoped>
.modal-opening-enter-from {
    height: 0px;
    padding: 0px 2rem;

}

.modal-opening-enter-to {
    height: 200px;
    padding: 2rem;
}

.modal-opening-enter-active {
    transition: all .5s ease-out;
}
</style>