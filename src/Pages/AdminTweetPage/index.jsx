import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSideBar from '../../Components/AdminSideBar';
import AdminTweetList from '../../Components/AdminTweetList';
import MyContext from '../../Components/MyContext';
import { Myaxios } from '../../constants';

function AdminTweetPage() {
  const [Data, setData] = useState(null);
  const navigate = useNavigate();
  const { token } = useContext(MyContext);

  useEffect(() => {
    if (!Data) {
      Myaxios(token)
        .get(`admin/tweets`)
        .then((e) => {
          setData(e.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleDeleteTweet = (id) => {
    Myaxios(token)
      .delete(`admin/tweets/${id}`)
      .then((e) => {
        setData((prevData) => prevData.filter((d) => d.id !== id));
        navigate('/admin/tweets');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AdminSideBar />
      {Data && <AdminTweetList data={Data} deleteTweet={handleDeleteTweet} />}
    </div>
  );
}

export default AdminTweetPage;
