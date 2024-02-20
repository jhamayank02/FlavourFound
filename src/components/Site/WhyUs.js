const WhyUs = ()=>{
    return (
        <div className="why-us-container mt-5 py-3 mx-4 bg-[#f05941] py-6">

            <div className="why-us-content">
            <h1 className="text-6xl mb-10 text-center font-normal text-white sm:text-5xl lg:text-4xl xl:text-3xl xl:mb-4">Why to choose us?</h1>

            <div className="flex justify-center gap-x-2 mt-7 xl:gap-x-4">

                <div className="why-us-card bg-white w-[300px] h-[530px]  rounded-2xl p-3 text-center flex flex-col justify-center transition-all delay-[0.2s] linear hover:scale-105 hover:cursor-pointer sm:h-[480px] lg:w-[320px] lg:h-[400px] xl:h-[380px]">
                    <i className='bx bx-cart-alt h-[180px] text-[#f05941] text-[170px]'></i>
                    <h1 className="text-[#757575] font-[500] text-4xl sm:text-3xl lg:text-2xl">Fast Delivery</h1>
                    <p className="font-extralight text-[#757575] text-3xl sm:text-2xl lg:text-xl">Experience the convenience of prompt and reliable delivery right to your doorstep.</p>
                </div>
                
                <div className="why-us-card bg-white w-[300px] h-[530px]  rounded-2xl p-3 text-center flex flex-col justify-center transition-all delay-[0.2s] linear hover:scale-105 hover:cursor-pointer sm:h-[480px] lg:w-[320px] lg:h-[400px] xl:h-[380px] xl:w-[300px]">
                    <i className='bx bx-certification h-[180px] text-[#f05941] text-[170px]'></i>
                    <h1 className="text-[#757575] font-[500] text-4xl sm:text-3xl lg:text-2xl">Hygiene Certifications</h1>
                    <p className="font-extralight text-[#757575] text-3xl sm:text-2xl lg:text-xl">Trust FlavourFound for a dining experience that prioritizes your health without compromising on flavor.</p>
                </div>

                <div className="why-us-card bg-white w-[300px] h-[530px]   rounded-2xl p-3 text-center flex flex-col justify-center transition-all delay-[0.2s] linear hover:scale-105 hover:cursor-pointer sm:h-[480px] lg:w-[320px] lg:h-[400px] xl:h-[380px]">
                    <i className='bx bx-credit-card-alt h-[180px] text-[#f05941] text-[170px]'></i>
                    <h1 className="text-[#757575] font-[500] text-4xl sm:text-3xl lg:text-2xl">Secure Payment</h1>
                    <p className="font-extralight text-[#757575] text-3xl sm:text-2xl lg:text-xl">Enjoy the convenience of various secure payment options, including credit/debit cards, digital wallets, and more.</p>
                </div>


            </div>

            </div>

        </div>
    )
}

export default WhyUs;