import { NavLink } from 'react-router-dom';
import randomFactImg from '../../assets/images/burger.jpg';

const RandomFact = ()=>{
    return <div className="random-fact-container mt-5 py-3 px-4 lg:mt-0">

        <h1 className="text-6xl mb-10 text-center font-normal sm:text-5xl lg:text-4xl">Random Facts!</h1>

        <div className="random-fact-content bg-[#f05941] rounded-2xl py-3 pl-4 h-[825px] m-auto mt-8 relative pr-1 sm:h-[720px] md:h-[620px] lg:h-[400px] xl:w-[1000px] xl:h-[315px]">

            <div className="random-fact-img absolute top-[-21px] right-0 overflow-hidden rounded-2xl h-[450px] w-[99%] md:h-[400px] lg:w-[50%] lg:left-1 xl:h-[310px] xl:w-[500px] xl:top-[-5px]">
                <img className="h-[inherit] w-[100%] object-cover" src={randomFactImg} alt="Random Fact Image"></img>
            </div>

            <div className="random-fact mt-[430px] pl-1 md:mt-[390px] lg:mt-[0] lg:w-[50%] lg:ml-auto lg:mr-0 lg:px-2 lg:py-3 xl:py-1">
                <h1 className="text-5xl text-[#fffffff5] font-[500] sm:text-4xl md:text-3xl xl:text-2xl">Here are some interesting facts about burgers</h1>
                <p className="text-[#fafaf9cf] text-3xl mt-2 mb-7 sm:text-2xl md:text-xl xl:text-lg xl:mb-3">The largest hamburger ever made weighed over 3,000 pounds (approximately 1,360 kg). It was cooked in Carlton, Minnesota, in 2012. This enormous burger included 60 pounds of bacon, 50 pounds of lettuce, 50 pounds of sliced onions, 40 pounds of pickles, and 40 pounds of cheese.</p>
                <NavLink to="/all" className="explore-btn border-[1px] border-[#fffffff5] bg-transparent px-20 py-3 text-[#fffffff5] rounded-2xl text-4xl hover:bg-[#fffffff5] hover:text-[#f05941] sm:text-3xl sm:py-2 sm:px-14 md:text-2xl md:px-10 lg:text-xl lg:px-7 xl:text-lg xl:px-8 xl:py-1">Explore</NavLink>
            </div>

        </div>

    </div>
}

export default RandomFact;