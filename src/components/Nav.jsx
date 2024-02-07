import React from 'react'
import { GrContact } from "react-icons/gr";
import { TbPhotoSensor2 } from "react-icons/tb";
import { RiHomeFill } from "react-icons/ri";
import {Link} from 'react-router-dom'


export default function Nav() {
    return (
        <div className="lg:absolute lg:top-5 lg:right-10 bg-[#f1dada] w-full lg:w-auto">
            <ul className="flex flex-row justify-center items-center gap-10  w-auto p-10">
            <Link to="/"><li className ="cursor-pointer"><RiHomeFill size={30} /></li></Link>
                <Link to="/gallery"><li className ="cursor-pointer"><TbPhotoSensor2 size={30} /></li></Link>
                <Link to="/contact"> <li className ="cursor-pointer"><GrContact size={25} /></li></Link>
            </ul>
        </div>
    )
}
