import axiosClient from "../axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseClient";
import { LoginInfor, SigninInfor } from "@/types/user";

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
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err.message);
            } else {
                console.log("Unknown error:", err);
            }
        }
    },
    async signinUser(signinForm: SigninInfor) {
        try {
            console.log(signinForm);

            const response = await axiosClient.post("/user", signinForm);
            console.log("response", response);
            return response;

        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log(err.message);
            } else {
                console.log("Unknown error:", err);
            }
        }
    }
}

export default userApi;