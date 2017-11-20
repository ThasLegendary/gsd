const authStorage = {
    getToken () {
      let token = localStorage.getItem('access_token')
      let expiration = localStorage.getItem('expiration')
      if (!token || !expiration) {
        return null
      }
      if (Date.now() > parseInt(expiration)) {
        this.destroyToken()
        return null
      }
  
      return token
    },
    setToken (accessToken, expiration, refreshToken) {
      localStorage.setItem('access_token', accessToken)
      localStorage.setItem('expiration', expiration + Date.now())
      localStorage.setItem('refresh_token', refreshToken)
    },
    destroyToken () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('expiration')
      localStorage.removeItem('refresh_token')
    },
    isAuthenticated () {
      if (this.getToken()) {
        return true
      } else {
        return false
      }
    },
    install (Vue) {
      Vue.prototype.$authStorage = this
    }
  }
  
  export default authStorage