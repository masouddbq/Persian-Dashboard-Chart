import React,{useEffect,useState} from "react";
import { Visibility } from "@mui/icons-material";
import userImg from "/user.jpg";
import { supabase } from '../../supabaseClient'

const WidgetSm = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
      if (error) {
        console.error('Error fetching users:', error)
      } else {
        setUsers(data)
      }
      setLoading(false)
    }
    fetchUsers()
  }, [])

  if (loading) return <div>در حال بارگذاری...</div>

  return (
    <div className="flex-col items-center justify-center w-full">
      {users.map((user) => (
        <div key={user.id} className="flex w-full justify-around items-center bg-white rounded-lg shadow">
          <img
            className="w-10 h-10 rounded-full object-cover mb-2"
            src={userImg}
            alt=""
          />
          <div className="flex-col w-36">
          <h4 className="font-bold mt-2">{user.username}</h4>
          <span className="text-gray-500 text-sm mb-2">{user.email}</span>
          </div>
          <button className="mt-2 p-1 rounded bg-slate-100 hover:bg-slate-200">
            <Visibility />
          </button>
        </div>
      ))}
    </div>
  );
};

export default WidgetSm;
