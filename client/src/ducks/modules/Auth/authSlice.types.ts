export interface AuthStateI {
  jwtToken: string | null;
  wasAccountCreated: boolean;
  isLoading: boolean;
  userInfo: {
    id: number;
    username: string;
  } | null;
}