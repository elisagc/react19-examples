import { User } from './interfaces';

export const createUser = (user: User): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;
      if (shouldFail) {
        reject(new Error('Error al crear el usuario'));
      } else {
        resolve(user);
      }
    }, 1000);
  });
};

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve([
          { name: 'John', surname: 'Doe' },
          { name: 'Jane', surname: 'Doe' },
        ]);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};
