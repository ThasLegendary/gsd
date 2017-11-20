var ClientOAuth2 = require('client-oauth2');

const githubAuth = new ClientOAuth2({
  clientId: '1c9dc7cfc0721f2751e6',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://localhost:8081/auth/callback',
  scopes: ['repo']
});

export default githubAuth;