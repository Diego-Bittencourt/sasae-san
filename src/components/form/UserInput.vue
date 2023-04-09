<template>
    <section class="lg:max-w-screen-lg mx-auto">
        <div class="toggle-buttons flex my-8">
            <div class="grow-1 text-3xl font-bold w-1/2 text-center p-4 active:scale-110 transition duration-100 cursor-default" @click="goToRandom" :class="isTabRandom ? 'shadow-lg shadow-red-500' : ''">Random</div>
            <div class="grow-1 text-3xl font-bold w-1/2 text-center p-4 active:scale-110 transition duration-100 cursor-default" @click="goToStories" :class="!isTabRandom ? 'shadow-lg shadow-red-500' : ''">Choose stories</div>
        </div>
        <Transition mode="out-in" name="tabs">
            <RandomInput v-if="isTabRandom" />
            <StoryInput v-else />
        </Transition>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { authStore } from '../../stores/auth';
import RandomInput from '../Molecules/RandomInput.vue'
import StoryInput from '../Molecules/StoryInput.vue'

const auth = authStore()

//create a variable to tag between random and stories
const isTabRandom = ref(true)

//functions to toggle the tab
const goToRandom = () => {
    isTabRandom.value = true
}

const goToStories = () => {
    isTabRandom.value = false
}

    
    // //reach to the store to send the request
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': '1bddbd7ae8msh6bb0b163596e32dp1f39f4jsn4eddeff9ca05',
    //         'X-RapidAPI-Host': 'text-to-speech-neural-google.p.rapidapi.com'
    //     },
    //     body: `{"audioFormat":"ogg","paragraphChunks":["${data.character} です。  次回は${data.firstStory}という話です。 サザエさんは${data.secondStory}でございます。"],"voiceParams":{"name":"ja-JP-Wavenet-B","engine":"google","languageCode":"ja-JP"}}`
    // };

    // fetch('https://text-to-speech-neural-google.p.rapidapi.com/generateAudioFiles', options)
    //     .then(response => response.json())
    //     .then(response => {
            
    //         const thisTime = new Audio(`data:audio/x-wav;base64, ${response.audioStream}`)
    //         //thisTime.src = response.audioStream
    //         thisTime.play()
    //         console.log('ta ouvindo?', thisTime)
    //         console.log(response)
    //     })
    //     .catch(err => console.error(err));

</script>

<style scoped>
.toggle-buttons {
    @apply text-white;
}

.tabs-enter-from {
    opacity: 0;
    transform: translateX(50px);
}

.tabs-leave-to {
    opacity: 0;
    transform: translateX(-50px);
}

.tabs-enter-active,
.tabs-leave-active {
    transition: all 0.5s ease-in-out;
}

</style>