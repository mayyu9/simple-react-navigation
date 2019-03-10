import { AsyncStorage } from 'react-native'

import TokenService from '@around25/jwt-utils'

export const USER_KEY = "auth-demo-key";

const Token = new TokenService({
  storageSystem: AsyncStorage
});

// const isLoggedIn = async () => {
//   const tok = await Token.get();
//   return !!tok
// }

export const isLoggedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

const login = () => {
  // Make API call to retrieve an access token
  const tok = 'this_is_a_demo_access_token';

  return Token.store(tok);
}

const logout = () => {
  return Token.remove();
}
