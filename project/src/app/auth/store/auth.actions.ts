import { Action } from "@ngrx/store";

export type AuthActions =
  | AuthenticateSuccess
  | AuthenticateFailure
  | AutoLogin
  | LoginStart
  | Logout
  | SignupStart
  | ClearError

export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTHENTICATE_FAILURE = '[Auth] Authenticate Failure';
export const AUTO_LOGIN = '[Auth] Auto Login'
export const LOGIN_START = '[Auth] Login Start';
export const LOGOUT = '[Auth] Logout';
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) { }
}

export class AuthenticateFailure implements Action {
  readonly type = AUTHENTICATE_FAILURE;
  constructor(
    public payload: string
  ) { }
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

// The following's failure leads to AuthenticateFailure since the same procedure is executed
export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(
    public payload: {
      email: string,
      password: string
    }
  ) { }
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}
