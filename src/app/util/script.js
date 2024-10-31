//imports
import { db } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  arrayUnion,
} from "firebase/firestore";
//getIp
const getIp = async () => {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data.ip;
};
//getData
let token = "05ed8f6ab1a4fc";
const getLocation = async (ip) => {
  const res = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
  const data = await res.json();

  return {
    city: data?.city,
    region: data?.region,
    country: data?.country,
    loc: data?.loc,
  };
};

let address = [];
const outputData = async () => {
  const ip = await getIp();
  const location = await getLocation(ip);

  if (location) {
    address.push(location);
  }
  return address;
};

export const trackVisitor = async () => {
  const ip = await getIp();
  if (!ip) {
    console.error("Couldn't fetch Ip");
    return;
  }
  const visitorRef = doc(db, "visits", ip);
  const addressData = await outputData();
  console.log(addressData);

  try {
    const docSnap = await getDoc(visitorRef);

    if (docSnap.exists()) {
      await updateDoc(visitorRef, {
        Visitor: arrayUnion({
          ipadress: ip,
          Address: `${addressData[0].city}, ${addressData[0].region}, ${addressData[0].country}`,
          cordinates: addressData[0].loc,
        }),
        date: new Date(),
      });
      const countUsers = async () => {
        const visitCollection = collection(db, "visits");
        const visitDoc = await getDocs(visitCollection);
        return visitDoc.size;
      };
      const count = await countUsers();
      let msg = "Love coming back! dont we?";
      return [count, msg];
    } else {
      try {
        await setDoc(visitorRef, {
          Visitor: [
            {
              ipadress: ip.toString(),
              Address: `${addressData[0].city}, ${addressData[0].region}, ${addressData[0].country}`,
              coordinates: addressData[0].loc,
            },
          ],
          date: new Date(),
        });
      } catch (errorDoc) {
        console.log("Error in doc" + errorDoc);
      }
      const countUsers = async () => {
        const visitCollection = collection(db, "visits");
        const visitDoc = await getDocs(visitCollection);
        return visitDoc.size;
      };
      const count = await countUsers();
      return count;
    }
  } catch (error) {
    console.error("Unable to verify in database");
  }
};
