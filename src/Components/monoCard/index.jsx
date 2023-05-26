import React from "react";
import trash from "../../static/trash-19.png";
import clock from "../../static/clock-16.png";

const Tag = ({text}) => {
    return(
        <span className="inline-flex ml-[8px] px-[11px] rounded-[15px] border border-[#000000] bg-[#EAEAEA] font-['Inter'] not-italic font-normal text-xs/[15px]">
            {text}
        </span>
    )
}
const MonoCard = ({title, description, tags, timePassed}) => {

    const tag_array = tags.toString().split(",");
    return(
        <div className="mt-[10px] ml-[10px] box-border w-[540px] h-[132px] bg-[#FFFFFF] border border-solid border-[#CECECE]">
            <div className="mt-[10px] ml-[10px] flex-row flex">
                <div className="h-[19px] font-['Inter'] not-italic font-semibold text-base text-black">
                    {title}
                </div>
                <img src={trash} className="absolute ml-[507px]" onClick={() => alert("Delete not Implemented!")}/>
            </div>
            <div className="mt-[7px] ml-[10px] w-[520px] h-[45px] font-['Inter'] not-italic text-xs/[15px] font-normal text-[#3C3C3C]">
                {description}
            </div>
            <div className="ml-[10px] mt-[14px] w-[520px] h-[0px] absolute border border-solid border-[#CECECE]"></div>
            <div className="flex flex-row">
                <div className="flex mt-[18px] ml-[2px]">
                    {tag_array.map((tag_value, index) => (
                        <div key={index}>
                            <Tag text={tag_value}/>
                        </div>
                    ))}
                </div>
                <img src={clock} className="absolute w-[16px] h-[16px] mt-[24px] ml-[442px]"/>
                <span className="absolute h-[15px] ml-[463px] mt-[24px] font-['Inter'] not-italic font-normal text-xs/[15px] text-[#2A2A2A]">{timePassed}</span>
            </div>
        </div>
    );
}

export default MonoCard;
