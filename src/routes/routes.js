import About from "pages/About";
import CertainPost from "pages/CertainPost";
import Login from "pages/Login";
import Posts from "pages/Posts";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: false},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <CertainPost/>, exact: true},
]


export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: false},
]