import { useContext, useEffect, useState } from "react";
import Card from "../../ui/Card";
import './css/Categories.css';
import CardSkeleton from "../../ui/skeletons/CardSkeleton";
import Pagination from "../../utils/Pagination";
import PaginationItems from "../../utils/PaginationItems";
import notificationContext from "../../ctx/notificationContext";


const Categories = ()=>{
    
    const notificationCtx = useContext(notificationContext);

    const [category, setCategory] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currPage, setCurrPage] = useState(1);
    
    const itemsCount = foodList.length;
    const itemsPerPage = 6;
    const totalPages = Math.ceil(itemsCount/itemsPerPage);
    
    const indexOfLastItem = currPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currFoodList = foodList.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (page)=>{
        setCurrPage(page);
    }

    useEffect(()=>{

        const url = category === '' ? "https://flavourfound.onrender.com/foods/all" : "https://flavourfound.onrender.com/foods/category/"+category;
        setIsLoading(true);

        fetch(url, {
            method: "GET"
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            setCurrPage(1);
            setFoodList(data.foodItems);
            setIsLoading(false);
        })
        .catch(err => {
            notificationCtx.showNotification(true, err.message);
        })

    }, [category])

    return (
        <div className="categories-container mt-5 py-3 px-4">

            <div className="categories-content">

                <h1 className="text-3xl text-center text-[500]">Order whatever you want!</h1>

                <div className="category-menu">
                    <ul className="mt-3 flex justify-center items-center gap-x-[10px] max-[600px]:gap-x[-[3px]">
                        <li onClick={() => setCategory('')} className={`${category === '' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-2xl cursor-pointer py-1 px-5  max-[600px]:px-2 max-[600px]:text-sm`}><a>All</a></li>
                        <li onClick={() => setCategory('indian')} className={`${category === 'indian' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-2xl cursor-pointer py-1 px-5 max-[600px]:px-2 max-[600px]:text-sm`}><a>Indian</a></li>
                        <li onClick={() => setCategory('mexican')} className={`${category === 'mexican' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-2xl cursor-pointer py-1 px-5 max-[600px]:px-2 max-[600px]:text-sm`}><a>Mexican</a></li>
                        <li onClick={() => setCategory('chinese')} className={`${category === 'chinese' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-2xl cursor-pointer py-1 px-5 max-[600px]:px-2 max-[600px]:text-sm`}><a>Chinese</a></li>
                        <li onClick={() => setCategory('italian')} className={`${category === 'italian' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-2xl cursor-pointer py-1 px-5 max-[600px]:px-2 max-[600px]:text-sm`}><a>Italian</a></li>
                    </ul>
                </div>


                <div className="foods-container mx-auto mt-4 w-[1350px] max-[600px]:w-auto max-[700px]:w-[500px] max-[718px]:w-[100%] max-[1050px]:w-[670px] max-[1442px]:w-[1010px]">
                    {!isLoading && foodList.length === 0 && <h1 className="text-2xl my-5 text-center text-[500]">Sorry, nothing available in <span className="text-[#f05941]">'{category}'</span> category at the moment.</h1>}
                    {<PaginationItems items={currFoodList} isLoading={isLoading} />}
                </div>


                <div className="pagination">
                <ul className="mt-6 flex justify-center py-2">
                    {!isLoading && <Pagination totalPages={totalPages} currPage={currPage} paginate={paginate} />}
                </ul>
                </div>

            </div>

        </div>
    )
}

export default Categories;