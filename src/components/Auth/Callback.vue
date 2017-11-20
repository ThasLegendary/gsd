<template>
  <div id="callback">
  </div>
</template>

<script>
export default {
    name: 'Callback',
    created() {
        this.$githubAuth.code.getToken(this.$route.fullPath)
        .then(function (user) {
        console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... } 
    
        // Refresh the current users access token. 
        user.refresh().then(function (updatedUser) {
            console.log(updatedUser !== user) //=> true 
            console.log(updatedUser.accessToken)
        })
    
        // Sign API requests on behalf of the current user. 
        user.sign({
            method: 'get',
            url: 'http://example.com'
        })
    
        // We should store the token into a database. 
        return res.send(user.accessToken)
        })
    }
}
</script>

<style lang="scss">
  
</style>