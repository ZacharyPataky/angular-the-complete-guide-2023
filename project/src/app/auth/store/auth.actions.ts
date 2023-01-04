import { Action } from "@ngrx/store";

export type AuthActions =
  | Login
  | Logout

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}
