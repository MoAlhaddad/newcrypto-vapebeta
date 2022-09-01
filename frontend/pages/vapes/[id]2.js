import Link from "next/link";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
const Vapes = () => {
    return (
        <>
        <Head>
            <title> Vapes </title>
            <meta name="vapewords" content="vapes"/>

        </Head>
        <div
        style={{
position: "absolute",
width: "1187px",
height: "383px",
left: "177px",
top: "148px",
background: "#E8E6E6",
borderRadius: "20px",
        }}> 
            <h1>Vapes</h1>
        </div>
        </>

    )

}


export default Vapes;