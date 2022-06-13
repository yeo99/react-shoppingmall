import TopNavBar from "../components/TopNavBar";
import GoodsCardList from "../components/GoodsCardList";

function MainPage() {
    return (
    <>
        <TopNavBar></TopNavBar>
        <div className="main-bg"></div>
        <GoodsCardList></GoodsCardList>
    </>
    );
}

export default MainPage;