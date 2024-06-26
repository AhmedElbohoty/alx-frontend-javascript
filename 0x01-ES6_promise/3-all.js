import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([user, photo]) => {
      const message = `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(message);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
