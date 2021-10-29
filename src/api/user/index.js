import { user } from "./paths";

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const storeUserData = async (id, email, name, url) => {
    try {
        const response = await fetch(user.storeUserData(), {
                method: 'POST',
                body: JSON.stringify({ id, email, name, url }),
                headers: defaultHeaders
            }
        );

        return response.json();
    } catch (err) {
        console.error(err);
    }
};