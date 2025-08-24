import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState([
    { month: 'Jan', sale: 400 },
    { month: 'Feb', sale: 800 },
    { month: 'Mar', sale: 1200 },
  ]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (!error) setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-8">در حال بارگذاری...</div>;
  if (!product) return <div className="p-8">محصول یافت نشد.</div>;

  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">محصول</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart */}
        <div className="bg-white rounded-lg shadow p-6 flex-1">
          <h3 className="font-bold mb-4">فروش در ماه</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={sales}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Line type="monotone" dataKey="sale" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Product Info */}
        <div className="bg-white rounded-lg shadow p-6 w-full md:w-80 flex flex-col items-center">
          <img src={product.image || '/user.jpg'} alt={product.name} className="w-20 h-20 rounded-full object-cover border mb-4" />
          <div className="text-center">
            <div className="font-bold text-lg mb-2">{product.name}</div>
            <div className="text-gray-600 mb-1">شناسه: <span className="font-mono">{product.id}</span></div>
            <div className="text-gray-600 mb-1">قیمت: <span className="font-mono">${product.price}</span></div>
            <div className="text-gray-600 mb-1">فعال: <span>{product.active ? 'بله' : 'خیر'}</span></div>
            <div className="text-gray-600 mb-1">موجودی: <span>{product.in_stock ? 'بله' : 'خیر'}</span></div>
          </div>
        </div>
      </div>
      {/* Edit Form */}
      <div className="bg-white rounded-lg shadow p-6 mt-8 flex flex-col md:flex-row gap-6 items-center">
        <form className="flex-1 flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">نام محصول</label>
            <input type="text" value={product.name} className="border rounded px-3 py-2 w-full" readOnly />
          </div>
          <div className="flex gap-4">
            <div>
              <label className="block text-gray-700 mb-1">موجودی</label>
              <select className="border rounded px-3 py-2 w-full" value={product.in_stock ? 'بله' : 'خیر'} readOnly>
                <option>بله</option>
                <option>خیر</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">فعال</label>
              <select className="border rounded px-3 py-2 w-full" value={product.active ? 'بله' : 'خیر'} readOnly>
                <option>بله</option>
                <option>خیر</option>
              </select>
            </div>
          </div>
        </form>
        <div className="flex flex-col items-center">
          <img src={product.image || '/user.jpg'} alt={product.name} className="w-28 h-28 rounded-lg object-cover border mb-4" />
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded transition font-bold">بارگذاری (ویرایش)</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 