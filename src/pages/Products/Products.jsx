import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (!error) setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Products</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} className="text-center py-6">Loading...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan={4} className="text-center py-6">No products found.</td></tr>
            ) : (
              products.map((product, idx) => (
                <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4">{idx + 1}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img src={product.image || '/user.jpg'} alt="product" className="w-8 h-8 rounded-full object-cover border" />
                    <Link to={`/product/${product.id}`} className="text-blue-700 hover:underline">
                      <span>{product.name}</span>
                    </Link>
                  </td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded transition text-sm">Edit</button>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;