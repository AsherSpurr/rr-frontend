import { NewUser } from "./utils/utils";

export const postNewUser = (newUser: NewUser) => {
 return fetch("https://8deefa6e-9aee-47e2-b8ea-a4dd591b3fc3.mock.pstmn.io/api/v1/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        newUser,
    })
})
.then((response: any) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Failed to create account.");
    }
})
};
