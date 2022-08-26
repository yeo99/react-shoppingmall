import TopNavBar from "../components/TopNavBar";
import GoodsCardListDetail from "../components/GoodsCardListDetail";
import data from "../data";
import { useState, useEffect } from "react";

function DetailPage(props) {
    let [shoes] = useState(data);

    useEffect(() => {
        
    }, [])

    return(
        <>
            <TopNavBar></TopNavBar>
            <GoodsCardListDetail shoes={shoes}></GoodsCardListDetail>
        </>
    );
}

export default DetailPage;