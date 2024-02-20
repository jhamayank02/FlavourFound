import React, { useEffect, useState, useContext } from 'react'
import Table from '../../../utils/Table';
import Loading from '../Loading';
import notificationContext from '../../../ctx/notificationContext';

const columns = [
  {
    "Header": "Food item id",
    "accessor": "item_id"
  },
  {
    "Header": "Food item",
    "accessor": "name"
  },
  {
      "Header": "Price (in ₹)",
      "accessor": "price"
  },
  {
      "Header": "Stock",
      "accessor": "stock"
  },
  {
      "Header": "Category",
      "accessor": "category"
  },
  {
      "Header": "Description",
      "accessor": "description"
  }
]

function AllAvailableFoods(props) {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const notificationCtx = useContext(notificationContext);

  const {fetchData, showEditFoodModal} = props;

  const fetchFoodDetails = (food_id)=>{
    fetchData(`https://flavourfound.onrender.com/foods/details/${food_id}`, "GET")
      .then(res=>{
        showEditFoodModal(res.foodItem);
      })
      .catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })
  }

  useEffect(()=>{
    setLoading(true);
    fetchData('https://flavourfound.onrender.com/foods/all', "GET")
      .then(res=>{
        if(res.status === 200){
          const result = [];

          res.foodItems.map((item)=>{
            result.push({

              item_id: item._id,
              name: item.name,
              price: item.price,
              stock: item.stock,
              category: item.category,
              description: item.description
            })  
          })

          setData(result);
          setLoading(false);
        }
        else{
          throw Error(res.msg);
        }
      })
      .catch(err=>{
        notificationCtx.showNotification(true, err.message)
      })

  }, []);

  return (
    <div>
        <h1 className='text-6xl mt-2 mb-12 text-[#484b4bf2] text-center underline sm:text-5xl lg:text-4xl xl:text-3xl xl:mb-6'>All Available Food Items</h1>
        
        {loading && <Loading />}
        {!loading && <Table fetchDetails={fetchFoodDetails} columns={columns} data={data} />}
    </div>
  )
}

export default AllAvailableFoods;