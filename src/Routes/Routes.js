import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutSection from "../Pages/Home/AboutSection/AboutSection";
import Blog from "../Pages/Home/Blog/Blog";
import ContactForm from "../Pages/Home/ContactForm/ContactForm";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/Home/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Home/Projects/Projects";
import Skills from "../Pages/Home/Skills/Skills";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutSection></AboutSection>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <ContactForm></ContactForm>
            },
            {
                path: "/project/:id",
                loader: async ({params}) => await fetch(`https://developer-portfolio-server-1v9wycpxj-spsujoy007.vercel.app/project/${params.id}`),
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])