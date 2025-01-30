import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";


function AppLayout() {
   return(
    <>
      <AppHeader />
       <main className="container">
        <Outlet />
       </main>
      <AppFooter />
    </>  
   );
}

export default AppLayout;