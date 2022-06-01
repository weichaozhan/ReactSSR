import axios from "axios";

import { CHANGE_LIST } from "../constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => dispatch => axios.get('xxx')
  .then(res => {
    console.log('res', res);
    dispatch(changeList(new Array(9).fill('').map((item, index) => `${Date.now()}_${index}`)));
  })
  .catch(() => {
    dispatch(changeList(new Array(9).fill('').map((item, index) => `${Date.now()}_${index}`)));
  });
