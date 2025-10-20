import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar";
import Footer from "../Page/Shared/Footer";

const MainLayOut = () => {
    return (
         <div className="flex flex-col min-h-screen  mx-auto">
            {/* NavBar - header at the top */}
            <NavBar />

             {/* <section className='border-2 p-3 rounded-xl'>
             <Slider></Slider>
             </section>

             <section>
                <Heading></Heading>
             </section> */}
           

            {/* Main Content - takes up the remaining space */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer - at the bottom */}
            <Footer />
        </div>
    );
};

export default MainLayOut;