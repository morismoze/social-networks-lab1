import { facebook } from "./paths";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const storeUserData = async ({ name, email }) => {
    try {
        const response = await fetch(facebook.storeUserData(), {
                method: 'POST',
                body: JSON.stringify({ name, email }),
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
}