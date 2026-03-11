import { useRouter } from "next/router";
import Navbar from "../navbar";

// routes where the navbar should not be rendered
// include the custom 404 path so the navbar is hidden on error page
const disableNavbar = ['/auth/login', '/auth/register', '/404'];


type AppShellProps = {
  children: React.ReactNode;
};


const AppShell = (props:AppShellProps) => {

const { children } = props;
const {pathname} = useRouter();
return (
<main>
{!disableNavbar.includes(pathname) && <Navbar />}
{children}

</main>
);
};

export default AppShell;