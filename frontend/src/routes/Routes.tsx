import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage/LoginPage";
import ChatPage from "../pages/ChatPage/ChatPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "", 
                element: <LoginPage/> 
            },
            {
                path: "chat", 
                element: <ChatPage/> },
        ]
    }
]);