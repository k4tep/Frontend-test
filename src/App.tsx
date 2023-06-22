import React from "react";
// import authProvider from "./auth/authProvider";
import { Admin, Resource, fetchUtils } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { ContactsList } from "./components/contacts-list";
import { authProvider } from "./auth/auth-provider";
import "./App.css";

const httpClient = (url: string) => {
    const options = {
        headers: new Headers({ Accept: "application/json" }),
    };
    options.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
    // options.headers.set("Access-Control-Allow-Origin", "*");
    // options.headers.set("Access-Control-Expose-Headers", "Content-Range");
    // options.headers.set("Content-Range", "industries 0-99/146");
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = restProvider("http://3.65.149.62/test-api", httpClient);
// const provider = {
//     ...dataProvider,
//     getContactsList: () => {
//         return fetch("http://3.65.149.62/test-api/contacts", { method: "GET" }).then((response) =>
//             response.json()
//         );
//     },
// };

function App() {
    return (
        <Admin authProvider={authProvider} dataProvider={dataProvider}>
            <Resource name="contacts" list={ContactsList}></Resource>
        </Admin>
    );
}

export default App;
