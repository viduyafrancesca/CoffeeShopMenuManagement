import { Link } from 'react-router-dom';
import { CiCoffeeCup } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { BiShow } from 'react-icons/bi';
import {useState} from 'react';
import MenuModal from './MenuModal';

const MenuSingleCard = ({ menu }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div
            key={menu._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='flex justify-start items-center px-4 py-1 m-4 bg-red-300 rounded-lg'>
                {menu.itemName}
            </h2>
            <div className='flex justify-start items-center gap-x-2'>
                <CiCoffeeCup className='text-red-300 text-2xl' />
                <h2 className='my-1'>{menu.size}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <IoPricetagsOutline className='text-red-300 text-2xl' />
                <h2 className='my-1'>₱{menu.price}.00</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiCategory className='text-red-300 text-2xl' />
                <h2 className='my-1'>{menu.category}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                onClick={() => setShowModal(true)}
                />
                <Link to={`menu/details/${menu._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`menu/edit/${menu._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-black' />
                </Link>
                <Link to={`menu/delete/${menu._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-800 hover:text-black' />
                </Link>
            </div>
            {
                showModal && (
                    <MenuModal menu={menu} onClose={() => setShowModal(false) }/>
                )
            }
        </div>
    )
}

export default MenuSingleCard