import TopNavBar from "../components/TopNavBar";
import GoodsCardListDetail from "../components/GoodsCardListDetail";
import data from "../data";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function DetailPage(props) {
    let [shoes] = useState(data);
    const location = useLocation();

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