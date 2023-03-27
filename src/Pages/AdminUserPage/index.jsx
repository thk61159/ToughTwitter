import { useContext, useEffect, useState } from 'react';
import { Myaxios } from '../../constants';
import MyContext from '../../Components/MyContext';
import AdminUserCards from '../../Components/AdminUserCards';
import AdminSideBar from '../../Components/AdminSideBar';

function AdminUserPage() {
  const [Data, setData] = useState(null);
  const { token } = useContext(MyContext);

  useEffect(() => {
    if (!Data) {
      Myaxios(token)
        .get(`admin/users`)
        .then((e) => {
          setData(e.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <AdminSideBar />
      {Data && <AdminUserCards data={Data} />}
    </div>
  );
}

export default AdminUserPage;
