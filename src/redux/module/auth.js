const prefix = "bluedot/auth";

const START = `${prefix}START`;
const SUCCESS = `${prefix}SUCCESS`;
const FAIL = `${prefix}FAIL`;

export const loginStart = () => ({ type: START });
export const loginSuccess = (token) => ({ type: SUCCESS, token });
export const loginFail = (error) => ({ type: FAIL, error });

const initialState = {
  loading: false,
  token: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        loading: true,
        token: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        token: action.token,
        error: null,
      };
    case FAIL:
      return {
        loading: false,
        token: null,
        error: action.error,
      };
    default:
      return state;
  }
};
