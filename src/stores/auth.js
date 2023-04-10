import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    //store
    gptAnswer: '',
    isModalOn: false
  }),
  getters: {
    //getters here
    getModal: (state) => {
      return state.isModalOn
    },
    getGptAnswer: (state) => {
      return state.gptAnswser
    }
  },
  actions: {
    showModal() {
      this.isModalOn = true
    },
    hideModal() {
      this.isModalOn = false
    },
    async fetchGpt(userInput) {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        prompt: `${userInput}`
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
       // redirect: 'follow'
      }
      console.log("aqui ele", requestOptions)
      fetch('http://localhost:3000/generate', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          this.gptAnswer = result.response || ''
          this.showModal()
        })
        .catch((error) => console.log('error', error))

      //const apiKey = import.meta.env.VITE_GPT_KEY

      // console.log('userInput >>>', userInput)

      // const options = {
      //   //mode: "no-cors",
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ prompt: userInput })
      // } //end of otions object

      // console.log("options >>>", options)

      // try {
      //   let data = await fetch('http://localhost:3000/generate', options)
      //   console.log('the data from the server', data)
      //   let { response } = data
      //   this.gptAnswser = response
      //   return response
      // } catch (err) {
      //   console.log(err)
      // }
    }
    // fetchSpeech() {

    //   const options = {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json',
    //       'X-RapidAPI-Key': '1bddbd7ae8msh6bb0b163596e32dp1f39f4jsn4eddeff9ca05',
    //       'X-RapidAPI-Host': 'text-to-speech-neural-google.p.rapidapi.com'
    //     },
    //     body: '{"audioFormat":"ogg","paragraphChunks":["A detailed analysis of my experience using Open AI’s ChatGPT tool to create code. Intro. ChapGPT sounds too good to be true, so let’s ask it to write some JS code for us. I want to see if it can tackle tasks I do on a daily basis as a front-end dev. Let’s get straight into it and try to break this thing. :). Building a Modal in React. Although it is possible, let’s not start this experiment by adding some code to begin with"],"voiceParams":{"name":"Wavenet-B","engine":"google","languageCode":"en-IN"}}'
    //   };

    //   fetch('https://text-to-speech-neural-google.p.rapidapi.com/generateAudioFiles', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    // },//end of fetchSpeech
    //actions
  }
})
