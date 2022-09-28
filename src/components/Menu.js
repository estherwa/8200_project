import {Link} from "react-router-dom";
import {Outlet} from "react-router";
export default function Menu(props) {
    /**
     * This is the main menu that will appear in all pages and will have the option to go to either the page of the
     * forecast or the page of the location, here we are setting the objects to be in the middle and the image to be
     * fluid, so we can keep the website responsible
     *
     */

    return (
        <>
            <div className="row" style={{textAlign: "center"}}>

                <div className="col">
                    <Link to="/form">8200 Form</Link>
                </div>
                <div className="col">
                    <Link to="/">Table of participants </Link>

                </div>
            </div>
            <Outlet/>
        </>
    );
}