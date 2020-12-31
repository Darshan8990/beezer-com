import { db } from '../firebase'
import store from "../redux/store";
import { setrating } from "../redux/actions/userActions";



const totalratings = () => db.collection('ratings').get().then(
  (snapshot) => {
    store.dispatch(setrating(snapshot.docs.length));
    return snapshot.docs.length
  }
);

const addrating = (count, rating) => {
  store.dispatch(setrating(count + 1))
  db.collection("ratings").doc().set({ value: rating });

}

export default { totalratings, addrating }




