import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfo, BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const MenuTable = ({ menu }) => {
    return (

        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md'>No</th>
                    <th className='border border-slate-600 rounded-md'>ItemName</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Description</th>
                    <th className='border border-slate-600 rounded-md'>Size</th>
                    <th className='border border-slate-600 rounded-md'>Price</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden'>Category</th>
                    <th className='border border-slate-600 rounded-md'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {menu.map((menuKey, index) => (
                    <tr key={menuKey._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {menuKey.itemName}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {menuKey.description}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {menuKey.size}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {menuKey.price}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {menuKey.category}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/menu/details/${menuKey._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800' />
                                </Link>
                                <Link to={`/menu/edit/${menuKey._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-800' />
                                </Link>
                                <Link to={`/menu/delete/${menuKey._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-800' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MenuTable