import { db } from '../firebase'



const getaccountdetails = (account) => db.collection('accounts')
  .doc(account)
  .get()
  .then((docRef) => {
    let data = docRef.data()
    if (data) {
      return data
    }
  })
  .catch((err) => {
    console.error(err)
  })



export default { getaccountdetails }




