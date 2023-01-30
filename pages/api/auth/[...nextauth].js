import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { collection, getDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase"
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: "ksdahlkhsd",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      const docRef = doc(db, "users", token?.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        await setDoc(doc(db, "users", token.id), {
          createdAt:Timestamp.now(),
          ...token
        });
      }
      if (!docRef) {
       
      }
      console.log({ "this is token": token });
      session.user.id = token.id;
      return session;
    },
  },
});
