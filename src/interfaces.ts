export interface User {
  name: string;
  surname: string;
}

export interface UserState {
  user?: User;
  error?: string;
}
