/** @format */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, firestore } from "../../lib/firebaseConfig"; // Ensure correct import
import { getUserData } from "./get";

export const register = async (
  email: string,
  userName: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    const userData = {
      userName,
      email,
      createdAt: Timestamp.now(),
      profilePic:
        "https://res.cloudinary.com/dulovaduo/image/upload/v1731394549/profile_pics/bgsrd2kzajvtk86gzkbd.jpg",
      bio: "",
      websiteUrl: "",
      gender: "",
      note: "",
      followers: [],
      following: [],
      favorites: [],
      followersCount: 0,
      followingCount: 0,
      postCount: 0,
      isActive: true,
      isBlocked: false,
      isSuspended: false,
      isPublic: true,
    };

    await setDoc(doc(firestore, "users", uid), userData);
    return { ...userData, _id: uid };
  } catch (err) {
    throw err;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;
    const userDoc = await getUserData(uid);
    if (!userDoc) throw new Error("User data not found");
    return { ...userDoc, _id: uid };
  } catch (err) {
    throw err;
  }
};
