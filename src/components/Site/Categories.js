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
        <div className="categories-container mt-5 py-3 px-4 mb-5">

            <div className="categories-content">

                <h1 className="text-6xl mb-5 text-center font-normal sm:text-5xl lg:text-4xl">Order whatever you want!</h1>

                <div className="category-menu">
                    <ul className="mt-3 flex justify-center items-center gap-x-[10px]">
                        <li onClick={() => setCategory('')} className={`${category === '' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-[30px] cursor-pointer py-3 px-8 text-3xl sm:py-2 sm:text-2xl md:text-xl lg:text-lg lg:py-1 lg:px-6`}><a>All</a></li>
                        <li onClick={() => setCategory('indian')} className={`${category === 'indian' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-[30px] cursor-pointer py-3 px-8 text-3xl sm:py-2 sm:text-2xl md:text-xl lg:text-lg lg:py-1 lg:px-6`}><a>Indian</a></li>
                        <li onClick={() => setCategory('mexican')} className={`${category === 'mexican' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-[30px] cursor-pointer py-3 px-8 text-3xl sm:py-2 sm:text-2xl md:text-xl lg:text-lg lg:py-1 lg:px-6`}><a>Mexican</a></li>
                        <li onClick={() => setCategory('chinese')} className={`${category === 'chinese' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-[30px] cursor-pointer py-3 px-8 text-3xl sm:py-2 sm:text-2xl md:text-xl lg:text-lg lg:py-1 lg:px-6`}><a>Chinese</a></li>
                        <li onClick={() => setCategory('italian')} className={`${category === 'italian' ? 'border-[#f05941] bg-[#f05941] text-white' : 'border-[#f4f4f4] bg-[#f4f4f4] text-[#686868]'} border-[1px] rounded-[30px] cursor-pointer py-3 px-8 text-3xl sm:py-2 sm:text-2xl md:text-xl lg:text-lg lg:py-1 lg:px-6`}><a>Italian</a></li>
                    </ul>
                </div>


                <div className="foods-container mx-auto mt-4 w-[100%]">
                    {!isLoading && foodList.length === 0 && <h1 className="text-2xl my-5 text-center font-medium">Sorry, nothing available in <span className="text-[#f05941]">'{category}'</span> category at the moment.</h1>}
                    {<PaginationItems items={currFoodList} isLoading={isLoading} />}
                </div>


                <div className="pagination mt-3 pb-4">
                <ul className="mt-6 flex justify-center py-2">
                    {!isLoading && <Pagination totalPages={totalPages} currPage={currPage} paginate={paginate} />}
                </ul>
                </div>

            </div>

        </div>
    )
}

export default Categories;