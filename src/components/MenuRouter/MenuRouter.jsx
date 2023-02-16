import About from "../About/About";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Find from "./Find";
import Hi from "./Hi";
import Person from "./Person";

const MenuRouter = [
    {
        path: "/",
        element: <Home/>,
        title: "Home"
    },
    {
        path: "/about",
        element: <About/>,
        title: "About"
    },
    {
        path: "*",
        element: <NotFound/>,
        title: "Not Found"
    },
    {
        path: "/person",
        element: <Person/>,
        title: "Person"
    },
    {
        path: "/hi",
        element: <Hi/>,
        title: "Hi"
    },
    {
        path: "/find",
        element: <Find/>,
        title: "Find"
    }
    
]

export default MenuRouter