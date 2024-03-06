
import { CiCoffeeCup } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const MenuModal = ({ menu, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose} />
                <h2 className='flex justify-start items-center px-4 py-1 w-fit m-4 bg-red-300 rounded-lg'>
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
                <p className="my-1">Description: </p>
                <p className='my-2'>{menu.description}</p>

            </div>
        </div>
    )
}

export default MenuModal