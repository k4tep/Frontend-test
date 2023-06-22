export const authProvider = {
    login: async ({ username, password }:any) => {
        console.log(username, password)
        const request = new Request('http://3.65.149.62/test-api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ 'email': username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        const response = await fetch(request);
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        const { accessToken } = await response.json();
        return localStorage.setItem('token', accessToken);
    },
    logout: 
    () => {
        localStorage.removeItem('token')
        return Promise.resolve();
    },

    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },

    checkError: (error: { status: any; }) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
};
