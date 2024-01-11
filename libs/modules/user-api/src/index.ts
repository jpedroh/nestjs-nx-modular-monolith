type User = {
  id: string;
  name: string;
};

export interface UserApi {
  getUserById(id: string): Promise<User>;
}

export const USER_API_INJECTION_TOKEN = Symbol('USER_API_INJECTION_TOKEN');
