export interface AuthStateI {
  jwtToken: string | null;
  wasAccountCreated: boolean;
  isLoading: boolean;
}