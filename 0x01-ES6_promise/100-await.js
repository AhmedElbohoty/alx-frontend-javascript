import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const data = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };

    return data;
  } catch (error) {
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
