import TopNavBar from "../components/TopNavBar";
import GoodsCardListDetail from "../components/GoodsCardListDetail";
import data from "../data";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function DetailPage(props) {
    let [shoes] = useState(data);
    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('watched', location.pathname.substring(8));  
    }, [])

    return(
        <>
            <TopNavBar></TopNavBar>
            <GoodsCardListDetail shoes={shoes}></GoodsCardListDetail>
        </>
    );
}

export default DetailPage;