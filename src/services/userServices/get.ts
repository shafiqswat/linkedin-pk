/** @format */

import { firestore } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const getUserData = async (uid: string) => {
  try {
    const userDoc = await getDoc(doc(firestore, "users", uid));
    if (userDoc.exists())
      return {
        ...userDoc.data(),
        _id: uid,
      };
    return null;
  } catch (err) {
    throw err;
  }
};
