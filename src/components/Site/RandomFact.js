import { NavLink } from 'react-router-dom';
import randomFactImg from '../../assets/images/burger.jpg';

const RandomFact = ()=>{
    return <div className="random-fact-container mt-5 py-3 px-4">

        <h1 className="text-3xl text-center text-[500]">Random Facts!</h1>

        <div className="random-fact-content bg-[#f05941] rounded-2xl py-3 px-4 h-[280px] w-[1100px] m-auto mt-8 relative max-[1200px]:w-[100%] max-[1200px]:h-auto max-[1200px]:pb-6">

            <div className="random-fact-img absolute top-[-21px] left-[12px] overflow-hidden rounded-2xl h-[100%]">
                <img className="h-[inherit] w-[500px] object-cover max-[600px]:h-[250px] max-[1200px]:h-[350px] max-[1200px]:w-[1000px] max-[1200px]:left-[6px]" src={randomFactImg} alt="Random Fact Image"></img>
            </div>

            <div className="random-fact w-[50%] mr-0 ml-auto mt-6 max-[1200px]:w-[100%] max-[600px]:pt-[200px] max-[1200px]:pt-[300px]">
                <h1 className="text-2xl text-[#fffffff5] font-[500]">Here are some interesting facts about burgers</h1>
                <p className="text-[#fafaf9cf] text-l mt-2 mb-4">The largest hamburger ever made weighed over 3,000 pounds (approximately 1,360 kg). It was cooked in Carlton, Minnesota, in 2012. This enormous burger included 60 pounds of bacon, 50 pounds of lettuce, 50 pounds of sliced onions, 40 pounds of pickles, and 40 pounds of cheese.</p>
                <NavLink to="/all" className="explore-btn text-xl border-[1px] border-[#fffffff5] bg-transparent px-12 py-2 text-[#fffffff5] rounded-2xl text-x hover:bg-[#fffffff5] hover:text-[#f05941]">Explore</NavLink>
            </div>

        </div>

    </div>
}

export default RandomFact;