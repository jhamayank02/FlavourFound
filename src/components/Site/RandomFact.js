import { NavLink } from 'react-router-dom';
import randomFactImg from '../../assets/images/burger.jpg';

const RandomFact = ()=>{
    return <div className="random-fact-container mt-5 py-3 px-4">

        <h1 className="text-6xl mb-10 text-center font-normal">Random Facts!</h1>

        <div className="random-fact-content bg-[#f05941] rounded-2xl py-3 pl-4 h-[825px] m-auto mt-8 relative">

            <div className="random-fact-img absolute top-[-21px] right-0 overflow-hidden rounded-2xl h-[450px] w-[99%]">
                <img className="h-[inherit] w-[100%] object-cover" src={randomFactImg} alt="Random Fact Image"></img>
            </div>

            <div className="random-fact mt-[430px] pl-1">
                <h1 className="text-5xl text-[#fffffff5] font-[500]">Here are some interesting facts about burgers</h1>
                <p className="text-[#fafaf9cf] text-3xl mt-2 mb-7">The largest hamburger ever made weighed over 3,000 pounds (approximately 1,360 kg). It was cooked in Carlton, Minnesota, in 2012. This enormous burger included 60 pounds of bacon, 50 pounds of lettuce, 50 pounds of sliced onions, 40 pounds of pickles, and 40 pounds of cheese.</p>
                <NavLink to="/all" className="explore-btn border-[1px] border-[#fffffff5] bg-transparent px-20 py-3 text-[#fffffff5] rounded-2xl text-4xl hover:bg-[#fffffff5] hover:text-[#f05941]">Explore</NavLink>
            </div>

        </div>

    </div>
}

export default RandomFact;