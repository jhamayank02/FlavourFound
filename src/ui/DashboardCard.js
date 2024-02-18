const DashboardCard = (props)=>{

    const {heading, value, iconClass} = props;

    return (
        <div className="flex items-center border-[1px] border-[#e6e6e6] w-[max-content] py-3 px-4 rounded-sm mb-2 max-[600px]:w-[90%]">
            <div className="mr-2">
                <i className={`${iconClass} text-6xl text-[#515454]`}></i>
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-extralight">{heading}</span>
                <span className="text-2xl  font-extralight">{value}</span>
            </div>
        </div>
    )
}

export default DashboardCard;