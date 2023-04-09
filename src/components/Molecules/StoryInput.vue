<template>
    <form class="w-full" @submit.prevent="emitData">
        <div>
            <label class="text-white text-xl m-2" for="キャラクター">キャラクター</label>
            <a-select :focus="clearValidity" ref="select" v-model:value="characterSelected" style="width: 100%;"
                size='large' :options="characterList" :placeholder="'キャラクターを選択'">
            </a-select>
        </div>
        <div class="w-full my-6">
            <label class="text-white text-xl m-2" for="first-story">次回01</label>
            <input @focus="clearValidity" v-model.trim="firstStory" class="block w-full p-4 rounded-md my-2"
                id="first-story" type="text" />
        </div>
        <div class="w-full my-6">
            <label class="text-white text-xl m-2" for="second-story">次回02</label>
            <input @focus="clearValidity" v-model.trim="secondStory" class="block w-full p-4 rounded-md my-2"
                id="second-story" type="text" />
        </div>
        <div class="w-full my-6">
            <label class="text-white text-xl m-2" for="third-story">次回03</label>
            <input @focus="clearValidity" v-model.trim="thirdStory" class="block w-full p-4 rounded-md my-2"
                id="third-story" type="text" />
        </div>
        <div class="w-full my-6">
            <label class="text-white text-xl m-2" for="additional">フリー入力</label>
            <input @focus="clearValidity" v-model.trim="thirdStory" class="block w-full p-4 rounded-md my-2"
                id="additional" type="text" placeholder="特定シチュエーションを入力してください"/>
        </div>
        <p v-if="!isFormValid" class="text-2xl text-red-600 text-center">キャラクターと次回入力してください。</p>
        <base-button class="mx-auto my-8 w-full">生成</base-button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { authStore } from '../../stores/auth';

const auth = authStore()

//the chosen character from the drop down
const characterSelected = ref('')

//the stories input
const firstStory = ref('')
const secondStory = ref('')
const thirdStory = ref('')


//options for the dropbox
const characterList = ref([
    {
        value: 'sazae',
        label: 'サザエ'
    },
    {
        value: 'namihei',
        label: 'なみへい'
    },
    {
        value: 'fune',
        label: 'フネ'
    },
    {
        value: 'masuo',
        label: 'マスオ'
    },
    {
        value: 'katsuo',
        label: 'カツオ'
    },
    {
        value: 'wakame',
        label: 'ワカメ'
    },
    {
        value: 'tarao',
        label: 'タラオ'
    },
    {
        value: 'other',
        label: 'その他'
    }

])

//variable to hold form validity
const isFormValid = ref(true)

//function to clear the validity message when focus other elements
const clearValidity = () => {
    isFormValid.value = true
}

//function to validate the form
const validateForm = () => {
    if (
        characterSelected.value === '' ||
        firstStory.value === '' ||
        secondStory.value === '' ||
        thirdStory.value === ''
    ) {
        isFormValid.value = false
    }
}

const emitData = () => {

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
        character: characterSelected.value,
        firstStory: firstStory.value,
        secondStory: secondStory.value,
        thirdStory: thirdStory.value
    }

    //console the user's input for testing
    console.log(data)


}


</script>