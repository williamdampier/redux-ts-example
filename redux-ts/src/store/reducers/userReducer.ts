enum ActionState {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface userState {
  users: any[];
  loading: boolean;
  error: string | null;
}

interface FecthUserAction {
  type: ActionState.FETCH_USERS;
}

interface FecthUserSuccessAction {
  type: ActionState.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FecthUserErrorAction {
  type: ActionState.FETCH_USERS_ERROR;
  payload: string;
}
const initialState: userState = {
  users: [],
  loading: false,
  error: null,
};

type UserAction =
  | FecthUserAction
  | FecthUserErrorAction
  | FecthUserSuccessAction;

export const userReducer = (
  state = initialState,
  action: UserAction
): userState => {
  switch (action.type) {
    case ActionState.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case ActionState.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case ActionState.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
