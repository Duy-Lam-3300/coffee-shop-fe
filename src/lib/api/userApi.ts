import axiosClient from "../axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseClient";
import { LoginInfor } from "@/types/user";
const userApi = {

    async loginUser({ email, password }: LoginInfor) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const token = await user.getIdToken();
            const domain = process.env.NEXT_PUBLIC_API_HTTPS || ""
            // Send token to backend
            const response = await fetch(domain + "/protected", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            console.log("✅ Backend response:", data);
            return data;
        } catch (error: any) {
            console.error("Login failed:", error.message);
        }
    }
}

export default userApi;