import TopNavBar from "../components/TopNavBar";
import GoodsCardListDetail from "../components/GoodsCardListDetail";
import data from "../data";
import { useState } from "react";

function DetailPage(props) {
    
    let [shoes] = useState(data);

    return(
        <>
            <TopNavBar></TopNavBar>
            <GoodsCardListDetail shoes={shoes}></GoodsCardListDetail>
        </>
    );
}

export default DetailPage;