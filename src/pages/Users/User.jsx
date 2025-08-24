import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('*');
      if (!error) setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div className="w-full px-8 py-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">کاربران</h2>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3 px-4">ردیف</th>
              <th className="py-3 px-4">کاربر</th>
              <th className="py-3 px-4">ایمیل</th>
              <th className="py-3 px-4">وضعیت</th>
              <th className="py-3 px-4">تراکنش</th>
              <th className="py-3 px-4">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} className="text-center py-6">در حال بارگذاری...</td></tr>
            ) : users.length === 0 ? (
              <tr><td colSpan={6} className="text-center py-6">کاربری یافت نشد.</td></tr>
            ) : (
              users.map((user, idx) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3 px-4">{idx + 1}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img src={user.avatar || '/user.jpg'} alt="avatar" className="w-8 h-8 rounded-full object-cover border" />
                    <span>{user.username}</span>
                  </td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className={
                      user.status === 'active'
                        ? 'text-green-600 font-semibold'
                        : 'text-gray-400 font-semibold'
                    }>
                      {user.status === 'active' ? 'فعال' : 'غیرفعال'}
                    </span>
                  </td>
                  <td className="py-3 px-4">{user.transaction ? `$${user.transaction}` : '$0'}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded transition text-sm">ویرایش</button>
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

export default User;