import uuid from "react-uuid";
const PREFIX = "user/";
const SIGN_UP_IN = `${PREFIX}SIGN_UP_IN`;
const SIGN_OUT = `${PREFIX}SIGN_OUT`;
const UPDATE_INFO = `${PREFIX}UPDATE_INFO`;
const FAILED_LOGIN = `${PREFIX}FAILED_LOGIN`;
const INITIAL_FETECHED_USER_POST = `${PREFIX}INITIAL_FETECHED_USER_POST`;
export const signUpInSetState = (payload) => ({ type: SIGN_UP_IN, payload });
export const signOutSetState = (payload) => ({ type: SIGN_OUT, payload });
export const initialFetchedUserPost = (payload) => ({
  type: INITIAL_FETECHED_USER_POST,
  payload
});
export const updateUserInfoSetState = (payload) => ({ type: UPDATE_INFO, payload });
export const failedLoginSetState = (payload) => ({ type: FAILED_LOGIN, payload });

const initialValue = {
  id: uuid(),
  currentUser: false,
  // profile에 들어갈 email,
  email: "",
  // 로그인한 user의 고유 아이디
  uid: "",
  // profile에 들어갈 userName
  userName: "홍길동",
  // profile에 들어갈 사진 url
  photoUrl: "https://cdn-icons-png.flaticon.com/512/12515/12515277.png",
  // profile에 넣어도 되고 안넣어도 되는 한줄 자기소개
  intro: "여러분에 대해서 소개해보세요",
  post: [
    {
      category: "",
      imgurl: "",
      text: "",
      date: "",
      // 로그인한 user의 고유 아이디 입니다.
      uid: "",
      // 이 객체가 firebase에 저장될 때 생성된 고유 아이디 입니다.
      id: "",
      isEdit: false
    }
  ]
};

const user = (state = initialValue, action) => {
  switch (action.type) {
    case SIGN_UP_IN:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return initialValue;
    case UPDATE_INFO:
      console.log(action.payload);
      return { ...state, ...action.payload };
    case INITIAL_FETECHED_USER_POST:
      return { ...state, post: action.payload };
    case FAILED_LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default user;
