import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ReviewSkeleton from '../../ui/skeletons/ReviewSkeleton';
import cartContext from '../../ctx/cartContext';
import authContext from '../../ctx/authContext';
import notificationContext from '../../ctx/notificationContext';
import Reviews from '../../ui/Reviews';

const FoodPage = (props)=>{

    const authCtx = useContext(authContext);
    const notificationCtx = useContext(notificationContext);
    const location = useLocation();
    const food_item_id = location.state.id;

    const cartCtx = useContext(cartContext);

    const ind = cartCtx.items.findIndex(item => item.id === food_item_id);
    const [quantity, setQuantity] = useState(ind === -1 ? 0 : cartCtx.items[ind].quantity);

    const [foodDetails, setFoodDetails] = useState({});
    const [imgDisplay, setImgDisplay] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const ratingFeedbackInputRef = useRef('');
    const [ratingStarInput, setRatingStarInput] = useState(0);
    const navigate = useNavigate();

    const goToPrevPageHandler = ()=>{
        return navigate(-1);
    }

    const addToCartHandler = ()=>{
        if(ind === -1){
            setQuantity(1);
        }
        else{
            setQuantity(cartCtx.items[ind].quantity+1);
        }
        cartCtx.addItem({
            id: foodDetails.id,
            name: foodDetails.name,
            price: foodDetails.price,
            quantity: foodDetails.quantity,
            image: foodDetails.images[0].img_url
        })
    }

    const removeFromCartHandler = ()=>{
        setQuantity(cartCtx.items[ind].quantity-1);
        cartCtx.removeItem(foodDetails.id)
    }

    const ratingChangeHandler = (e)=>{
        setRatingStarInput(e.target.value);
    }

    const ratingFormSubmitHandler = (e)=>{
        e.preventDefault();

        fetch("https://flavourfound.onrender.com/foods/rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                food_item_id: foodDetails.id,
                customer_id: authCtx.id,
                stars: ratingStarInput,
                feedback: ratingFeedbackInputRef.current.value
            })
        })
        .then(response=> notificationCtx.showNotification(false, "Your response has beem submitted successfully."))
        .catch(err=>notificationCtx.showNotification(true, err.message))
    }

    useEffect(()=>{
        fetch(`https://flavourfound.onrender.com/foods/details/${food_item_id}`)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                setFoodDetails({
                    id: data.foodItem._id,
                    name: data.foodItem.name,
                    images: data.foodItem.images,
                    reviews: data.foodItem.reviews,
                    ingredients: data.foodItem.ingredients,
                    description: data.foodItem.description,
                    price: data.foodItem.price,
                    averageRating: data.foodItem.averageRating
                })
                setImgDisplay(data.foodItem.images[0].img_url);
                setIsLoading(false);
            })
            .catch(err=>notificationCtx.showNotification(true, err.message))
    }, [])

    return <div className="food-page w-[100%] flex-1 2xl:w-max 2xl:mx-auto">
        <div className='my-5 text-4xl mx-5 cursor-pointer text-[#404040] hover:text-[#f05941]sm:text-3xl md:text-2xl md:mb-2 xl:text-xl xl:my-1' onClick={goToPrevPageHandler}><i className='bx bx-left-arrow-alt text-4xl sm:text-3xl md:text-2xl lg:text-xl'></i>Go back</div>
        <div className="flex flex-col justify-center py-5 px-4 xl:flex-row">

            <div className="food-imgs-section w-[100%] h-[920px] border-[1px] border-[#dfdfdf] overflow-hidden rounded-2xl sm:h-[800px] lg:w-[90%] lg:mx-auto lg:h-[700px] xl:h-[500px] xl:w-[50%] xl:mr-3 2xl:w-[490px] 2xl:h-[490px]">

                {isLoading && <div className='mt-[-4px] block sm:hidden'><Skeleton height={750} /></div>}
                {isLoading && <div className='mt-[-4px] hidden sm:block lg:hidden'><Skeleton height={670} /></div>}
                {isLoading && <div className='mt-[-4px] hidden lg:block xl:hidden'><Skeleton height={600} /></div>}
                {isLoading && <div className='mt-[-4px] hidden xl:block'><Skeleton height={360} /></div>}

                {!isLoading && foodDetails.images !== undefined && <img src={imgDisplay} alt="Food Image" className="h-[750px] w-full object-cover sm:h-[670px] lg:h-[600px] xl:h-[400px]"></img>}

                <div className="related-imgs p-2">
                    <ul className="flex gap-x-1">
                        {isLoading && <Skeleton height={110} width={100} />}
                        {isLoading && <Skeleton height={110} width={100} />}
                        {isLoading && <Skeleton height={110} width={100} />}
                        {!isLoading && foodDetails.images !== undefined && foodDetails.images.map((img,ind)=>{
                        return <li key={ind}><img onClick={()=>setImgDisplay(img.img_url)} src={img.img_url} alt="Food Image" className="h-[150px] w-[180px] object-cover rounded border-[1px] border-[#f05941] sm:h-[110px] w-[140px] lg:h-[80px] lg:w-[110px] xl:w-[60px] xl:h-[70px]"></img></li>
                        })}
                    </ul>
                </div>
            </div>

            <div className="other-details ml-4 mt-6 lg:w-[90%] lg:mx-auto xl:mt-0 2xl:w-[600px]">

                <h1 className="text-6xl text-[#2d2d2de8] mb-2 sm:text-5xl md:text-4xl xl:text-2xl xl:mb-0">
                    {isLoading && <Skeleton />}
                    {!isLoading && foodDetails.name}
                </h1>
                <span className="text-5xl font-semibold text-[#f05941] sm:text-4xl md:text-3xl xl:text-xl xl:mt-[-5px]">
                    {isLoading && <Skeleton width={100} />}
                    {!isLoading && foodDetails.price+'₹'}
                </span>

                {isLoading && <div className="flex gap-x-1">
                    {Array(5).fill(0).map((item,ind)=>{
                        return <Skeleton circle={true} height={50} width={50} />
                    })}
                </div>}

                {!isLoading && <div className="ratings mt-2 xl:mt-0">
                    {Array(foodDetails.averageRating).fill(0).map(()=>{
                        return <i className='bx bxs-star text-[#0f9c00] text-4xl sm:text-3xl md:text-2xl xl:text-lg'></i>
                    })}
                    {Array(5-foodDetails.averageRating).fill(0).map(()=>{
                        return <i className='bx bx-star text-[#0000008c] text-4xl sm:text-3xl md:text-2xl xl:text-lg'></i>
                    })}
                </div>}

                <ul className="mt-3">
                    <h1 className="text-5xl mb-2 text-[#2d2d2de8] sm:text-4xl md:text-3xl xl:text-xl xl:mb-0">
                        {isLoading && <Skeleton width={150} />}
                        {!isLoading && 'Ingredients'}
                    </h1>
                    {isLoading && Array(3).fill(0).map((item,ind)=> {return <div key={ind} className='pl-2 text-3xl sm:text-2xl lg:text-xl xl:text-base w-[50%]'><Skeleton /></div>})}
                    {!isLoading && foodDetails.ingredients !== undefined && foodDetails.ingredients[0].split(',').map((ingredient,ind)=>{
                        return <li key={ind} className="pl-2 text-3xl text-[#404040] sm:text-2xl lg:text-xl xl:text-base">{ind+1}. {ingredient}</li>
                    })}
                </ul>

                {isLoading && <div className='text-3xl sm:text-2xl lg:text-xl xl:text-base'><Skeleton count={3} /></div>}
                {!isLoading && foodDetails.description && <div className="description mt-3"><div className="text-5xl text-[#2d2d2de8] mb-2 sm:text-4xl md:text-3xl xl:text-xl xl:mb-0">Description</div><div className="text-3xl text-[#2d2d2de8] sm:text-2xl lg:text-xl xl:text-base">{foodDetails.description}</div></div>}
                

                <div className="actions mt-3">
                    {isLoading && <div className='text-3xl sm:text-2xl w-[40%]'><Skeleton/></div>}
                    {!isLoading && 
                    <>
                    {quantity > 0 && <button onClick={removeFromCartHandler} className="mt-2 mr-2 bg-[#F05941] py-3 px-7 text-3xl text-white border-[1px] border-[#F05941] rounded-3xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] sm:text-2xl sm:py-2 md:px-5 md:py-2 lg:text-xl lg:py-1 xl:text-lg xl:py-0 xl:px-4">-</button>}
                    {quantity === 0 && <button onClick={addToCartHandler} className="mt-2 mr-2 bg-[#F05941] py-3 px-10 text-white border-[1px] border-[#F05941] rounded-3xl text-3xl sm:text-2xl sm:py-2 md:px-5 md:py-2 lg:text-xl lg:py-1 xl:text-lg xl:py-0 xl:px-4">Add to Cart</button>}
                    {quantity > 0 && <button className="py-3 px-7 text-3xl mr-2  border-[1px] border-[#e9e9e980] bg-[#e9e9e980] text-[#555555] rounded-3xl cursor-not-allowed sm:text-2xl sm:py-2 md:px-5 md:py-2 lg:text-xl lg:py-1 xl:text-lg xl:py-0 xl:px-4">Added to Cart ({quantity})</button>}
                    {quantity >= 1 && <button onClick={addToCartHandler} className="mt-2 bg-[#F05941] py-3 px-7 text-3xl text-white border-[1px] border-[#F05941] rounded-3xl hover:bg-white hover:text-[#F05941] hover:border-[#F05941] sm:text-2xl sm:py-2 md:px-5 md:py-2 lg:text-xl lg:py-1 xl:text-lg xl:py-0 xl:px-4">+</button>}
                    </>}
                </div>

                <div className="reviews mt-10 xl:mt-5">
                    <h1 className="text-5xl mt-3 mb-4 text-[#2d2d2de8] sm:text-4xl md:text-3xl xl:text-xl xl:mb-1">
                        {isLoading && <Skeleton width={250} />}
                        {!isLoading && 'Reviews'}
                    </h1>
                    
                    {isLoading && Array(3).fill(0).map((item,ind)=> {return <ReviewSkeleton />})}
                    {!isLoading && <>

                    {authCtx.authenticated && <form onSubmit={ratingFormSubmitHandler} className='mb-3'>
                        <textarea ref={ratingFeedbackInputRef} rows="4" required className="focus:outline-1 focus:outline-[#c9c9c9] border-[1px] py-1 px-3 rounded-sm w-[100%] resize-none text-3xl sm:text-2xl lg:text-xl xl:text-lg" placeholder="Did you like it? Share your thoughts."></textarea>

                        <div className='text-3xl sm:text-2xl lg:text-xl xl:text-lg'>
                            <span className='text-[#2d2d2de8]'>Leave a rating : </span>
                            <span className="mr-1">
                                <input onClick={ratingChangeHandler} required hidden id="rating-1" name='rating' value="1" type='radio'></input>
                                <label className="cursor-pointer" htmlFor="rating-1"><i className={`bx ${ratingStarInput >= '1' ?  'bxs-star text-[#0f9c00]' : 'bx-star text-[#0000008c]'}`}></i></label>
                            </span>
                            <span className="mr-1">
                                <input onClick={ratingChangeHandler} required hidden name='rating' id='rating-2' value="2" type='radio'></input>
                                <label className="cursor-pointer" htmlFor="rating-2"><i className={`bx ${ratingStarInput >= '2' ? 'bxs-star text-[#0f9c00]' : 'bx-star text-[#0000008c]'}`}></i></label>
                            </span>
                            <span className="mr-1">
                                <input onClick={ratingChangeHandler} required hidden name='rating' id='rating-3' value="3" type='radio'></input>
                                <label className="cursor-pointer" htmlFor="rating-3"><i className={`bx ${ratingStarInput >= '3' ? 'bxs-star text-[#0f9c00]' : 'bx-star text-[#0000008c]'}`}></i></label>
                            </span>
                            <span className="mr-1">
                                <input onClick={ratingChangeHandler} required hidden name='rating' id='rating-4' value="4" type='radio'></input>
                                <label className="cursor-pointer" htmlFor="rating-4"><i className={`bx ${ratingStarInput >= '4' ? 'bxs-star text-[#0f9c00]' : 'bx-star text-[#0000008c]'}`}></i></label>
                            </span>
                            <span className="mr-1">
                                <input onClick={ratingChangeHandler} required hidden name='rating' id='rating-5' value="5" type='radio'></input>
                                <label className="cursor-pointer" htmlFor="rating-5"><i className={`bx ${ratingStarInput >= '5' ? 'bxs-star text-[#0f9c00]' : 'bx-star text-[#0000008c]'}`}></i></label>
                            </span>
                        </div>

                        <button type="submit" className="mt-4 bg-[#F05941] mr-3 py-3 px-10 text-white border-[1px] border-[#F05941] rounded-sm w-[100%] hover:border-[#e9e9e980] hover:bg-[#e9e9e980] hover:text-[#555555] text-3xl sm:text-2xl sm:py-2 lg:text-xl lg:py-1 xl:text=lg xl:py-0">Submit</button>
                    </form>}

                    <Reviews reviews={foodDetails.reviews !== undefined ? foodDetails.reviews : []} />
                    </>} 
                </div>
                

            </div>

        </div>

    </div>
}

export default FoodPage;