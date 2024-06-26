import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const arr = [];

    results.forEach((res) => {
      const { status } = res;
      const obj = { status };

      const value = status === 'fulfilled' ? res.value : res.reason.toString();
      obj.value = value;
      arr.push(obj);
    });

    return arr;
  });
}

export default handleProfileSignup;
