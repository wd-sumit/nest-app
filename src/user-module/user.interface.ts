export interface User {
  email: string;
  username: string;
}

export interface UsersResponse {
  status: string;
  isSuccess: boolean;
  results: number;
  data: User[];
}
