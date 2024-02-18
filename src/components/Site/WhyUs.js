const WhyUs = ()=>{
    return (
        <div className="why-us-container mt-5 py-3 mx-4 bg-[#f05941] py-6">

            <div className="why-us-content">
            <h1 className="text-3xl text-white text-center text-[500]">Why to choose us?</h1>

            <div className="flex justify-center gap-x-14 mt-7 max-[1070px]:flex-col max-[1070px]:items-center max-[1070px]:gap-y-2">

                <div className="why-us-card bg-white w-[300px] h-[350px]  rounded-2xl p-3 text-center flex flex-col justify-center transition-all delay-[0.2s] linear hover:scale-105 hover:cursor-pointer">
                    <i className='bx bx-cart-alt h-[180px] text-[#f05941] text-[170px]'></i>
                    <h1 className="text-[#757575] font-[500] text-2xl">Fast Delivery</h1>
                    <p className="font-extralight text-[#757575]">Experience the convenience of prompt and reliable delivery right to your doorstep.</p>
                </div>
                
                <div className="why-us-card bg-white w-[300px] h-[350px]  rounded-2xl p-3 text-center flex flex-col justify-center transition-all delay-[0.2s] linear hover:scale-105 hover:cursor-pointer">
                    <i className='bx bx-certification h-[180px] text-[#f05941] text-[170px]'></i>
                    <h1 className="text-[#757575] font-[500] text-2xl">Hygiene Certifications</h1>
                    <p className="font-extralight text-[#757575]">Trust [Restaurant Name] for a dining experience that prioritizes your health without compromising on flavor.</p>
                </div>

                <div className="why-us-card bg-white w-[300px] h-[350px]   rounded-2xl p-3 text-center flex flex-col justify-center transition-all delay-[0.2s] linear hover:scale-105 hover:cursor-pointer">
                    <i className='bx bx-credit-card-alt h-[180px] text-[#f05941] text-[170px]'></i>
                    <h1 className="text-[#757575] font-[500] text-2xl">Secure Payment</h1>
                    <p className="font-extralight text-[#757575]">Enjoy the convenience of various secure payment options, including credit/debit cards, digital wallets, and more.</p>
                </div>


            </div>

            </div>

        </div>
    )
}

export default WhyUs;