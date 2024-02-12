
interface IUser {
    id: number,
    username: string
}

export const AuthService = {
    login: (username: string, password: string) => {
        if (username == "admin" && password == "admin") {
            localStorage.setItem("user", JSON.stringify({
                id: 0,
                username: username,
            }))

            return true;
        }
        else {
            return false;
        }
    },

    getCurrentUser: () => {
        const userDataString = localStorage.getItem("user");
        if (userDataString == null) {
            return null;
        }

        return JSON.parse(userDataString) as IUser; 
    },

    logout: () => {
        localStorage.removeItem("user");
    }
}
