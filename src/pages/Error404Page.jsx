import TopNavBar from "../components/TopNavBar";

function Error404Page() {
    return(
        <>
            <TopNavBar></TopNavBar>
            <div style={{marginTop:"40px"}}>Oops, That page Can't be found.</div>
            <div>Please Check the Address.</div>
        </>
    );
}

export default Error404Page;