import Link from "next/link";
// import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Vape from "../../assets/vapes.png";
import Vapor from "../../assets/vapes2.png";
import Image from "next/image";
import VapeCard from "../../components/VapeCard";
const Vapes = () => {
    return (
        <>
        <Navbar />
        <Head>
            {/* <title> Va</title> */}
            <meta name="vapewords" content="vapes"/>

        </Head>
        <div className="image-wrapper"> 
        <VapeCard />
        </div>
        </>

    )

}


export default Vapes; 