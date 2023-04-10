<template>
    <form class="lg:max-w-screen-lg mx-auto" @submit.prevent="emitData">
        <Teleport to="body">
            <BaseModal :message="receivedMessage" />
        </Teleport>

        <div class="w-full my-6">
            <label class="text-white text-xl m-2" for="additional" @click="auth.showModal">フリー入力{{ auth.isModalOn }}</label>
            <input @focus="clearValidity" v-model.trim="additionalData" class="block w-full p-4 rounded-md my-2"
                id="additional" type="text" placeholder="特定シチュエーションを入力してください" />
        </div>
        <p v-if="!isFormValid" class="text-2xl text-red-600 text-center">キャラクターと次回入力してください。</p>
        <base-button class="mx-auto my-8 w-full">生成</base-button>
    </form>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { authStore } from '../../stores/auth';

//storing the auth store in a variable
const auth = authStore()

//the additional info input
const additionalData = ref('')


//variable to hold form validity
const isFormValid = ref(true)

//function to clear the validity message when focus other elements
const clearValidity = () => {
    isFormValid.value = true
}

//function to validate the form
const validateForm = () => {
    if (
        additionalData.value === ''
    ) {
        isFormValid.value = false
    }
}

const emitData = async () => {

    //setting form valid as true to avoid bugs
    isFormValid.value = true

    //validateform
    validateForm()

    //if form is not valid, leave function without doing anything
    if (!isFormValid.value) {
        return
    }

    //create the object with the user's input
    const data = {
        additionalData: additionalData.value
    }

    //console the user's input for testing
    await auth.fetchGpt(additionalData.value)


} 

console.log(auth.gptAnswer)
//computed to return the correct message

const receivedMessage = computed(() => {
        return auth.gptAnswer
    

})

</script>