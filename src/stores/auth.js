import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    token: 'asdasdasdasd',
    accessToken: '',
    refreshTOken: '',
    accInfo: {},
    currentTab: 'create',
  }),
  getters: {
    //getters here
    getToken(state) {
        return state.accessToken
    },
    getAccVideos(state) {
      return state.accInfo.videos
    },
    getCurrentTab(state) {
      return state.currentTab
    },
  },
  actions: {
    goCreate() {
      this.currentTab = 'create'
    },
    goEdit() {
      this.currentTab = 'edit'
    },
    async login() {
      const credentials = {
        email: import.meta.env.VITE_LOGIN_EMAIL,
        password: import.meta.env.VITE_LOGIN_PASSWORD
      }
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      } // end of options object

      await fetch('https://apis.elai.io/auth/login', options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            this.settleAuth(response)
        })
        .catch((err) => console.error(err))
    }, //end of login
    settleAuth(authTokens) {
        this.accessToken = authTokens.accessToken
        this.refreshToken = authTokens.refreshToken
    }, //end of settleAuth
    fetchAccInfo() {
      const token = `Bearer ${this.accessToken}`
      const options = {
        method: 'POST',
        headers: { accept: 'application/json', Authorization: token }
      }
      fetch('https://apis.elai.io/videos/lookup', options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        this.accInfo = response
      })
    }, //end fetchAllVideos
  }
})
