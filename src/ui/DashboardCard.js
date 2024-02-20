const DashboardCard = (props)=>{

    const {heading, value, iconClass} = props;

    return (
        <div className="flex items-center border-[1px] border-[#e6e6e6] w-[max-content] py-3 px-4 rounded-sm mb-2">
            <div className="mr-2">
                <i className={`${iconClass} text-9xl text-[#515454] sm:text-8xl lg:text-7xl xl:text-6xl`}></i>
            </div>
            <div className="flex flex-col">
                <span className="text-5xl font-extralight sm:text-4xl lg:text-3xl xl:text-2xl">{heading}</span>
                <span className="text-6xl  font-extralight sm:text-5xl lg:text-4xl xl:text-3xl">{value}</span>
            </div>
        </div>
    )
}

export default DashboardCard;