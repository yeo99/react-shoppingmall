import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
function EventPage() {
        return (
            <>
                <TopNavBar></TopNavBar>
                <h1 style={{marginTop:"15px"}}>오늘의 이벤트</h1>
                <Outlet></Outlet>
            </>
        );
}

export default EventPage;