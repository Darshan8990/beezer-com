import { db } from '../firebase'
import store from "../redux/store";
import { setuser, setuserlist } from "../redux/actions/userActions";



const getusers = () => db.collection('users').onSnapshot((snap) => {
  const users = [];
  snap.forEach((doc) => {
    users.push(doc.data())
  })
  if (users.length > 0) {
    store.dispatch(setuserlist(users));
    store.dispatch(setuser(users[0]));
  }

})



export default { getusers }




