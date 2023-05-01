import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfjkehYQcysjOPaBbYdW2_6XQCgaPrsVI",
  authDomain: "vanlife-bb67a.firebaseapp.com",
  projectId: "vanlife-bb67a",
  storageBucket: "vanlife-bb67a.appspot.com",
  messagingSenderId: "733788660728",
  appId: "1:733788660728:web:878aee61331f04deb6ac0d",
  measurementId: "G-TPLBXL53XV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

async function getVan(name_id) {
  const lastDashIndex = name_id.lastIndexOf("-");
  // const name = name_id.slice(0, lastDashIndex).replace(/-/g, " "); // needs to be added as well
  const id = name_id.slice(lastDashIndex + 1);
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "456"));
  const querySnapshot = await getDocs(q);
  const hostVansData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return hostVansData;
}

const loginUser = async (creds) => {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
};

export { getVans, getVan, getHostVans, loginUser };

/* const getVans = async (name_id = "") => {
  const url = name_id ? `/api/vans/${name_id}` : "/api/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
};
 */
/* const getHostVans = async (name_id = "") => {
  console.log(name_id);
  const url = name_id ? `/api/host/vans/${name_id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}; */
