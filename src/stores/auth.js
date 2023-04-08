import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    //store
  }),
  getters: {
    //getters here
    
  },
  actions: {
    fetchSpeech() {

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '1bddbd7ae8msh6bb0b163596e32dp1f39f4jsn4eddeff9ca05',
          'X-RapidAPI-Host': 'text-to-speech-neural-google.p.rapidapi.com'
        },
        body: '{"audioFormat":"ogg","paragraphChunks":["A detailed analysis of my experience using Open AI’s ChatGPT tool to create code. Intro. ChapGPT sounds too good to be true, so let’s ask it to write some JS code for us. I want to see if it can tackle tasks I do on a daily basis as a front-end dev. Let’s get straight into it and try to break this thing. :). Building a Modal in React. Although it is possible, let’s not start this experiment by adding some code to begin with"],"voiceParams":{"name":"Wavenet-B","engine":"google","languageCode":"en-IN"}}'
      };
      
      fetch('https://text-to-speech-neural-google.p.rapidapi.com/generateAudioFiles', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    },//end of fetchSpeech
    //actions
  }
})
