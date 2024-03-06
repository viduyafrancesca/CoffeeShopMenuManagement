import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { BiSolidUniversalAccess } from 'react-icons/bi';

const EditMenu = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/menu/${id}`)
      .then((response) => {
        setItemName(response.data.data.itemName);
        setDescription(response.data.data.description);
        setSize(response.data.data.size);
        setPrice(response.data.data.price);
        setCategory(response.data.data.category);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error has occurred, please check console.', { variant: 'error' })
        console.log(error);
      });
  }, [])

  const handleEditItem = () => {
    const data = {
      itemName,
      description,
      size,
      price,
      category,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/menu/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Item updated successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened');
        console.log(error);
      });
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Item</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Item Name</label>
          <input
            type='text'
            value={itemName || ''}
            onChange={(e) => setItemName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Description</label>
          <input
            type='text'
            placeholder='optional'
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Size</label>
          <input
            type='text'
            value={size || ''}
            onChange={(e) => setSize(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Price</label>
          <input
            type='number'
            value={price || ''}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Category</label>
          <input
            type='text'
            value={category || ''}
            onChange={(e) => setCategory(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditItem}>Save</button>
      </div>
    </div>
  )
}

export default EditMenu