import { Link } from 'react-router-dom';
import { CiCoffeeCup } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import MenuSingleCard from './MenuSingleCard';

const MenuCard = ({ menu }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {menu.map((item) => (
        <MenuSingleCard key={item._id} menu={item}/>
      ))}
    </div>
  )
}

export default MenuCard