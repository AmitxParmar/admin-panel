import React from 'react'

type Props = {}

const SettingsSidebar = (props: Props) => {
    return (
        <div
            className="w-[225px] font-[500] pt-[28px] bg-[#1c1c1c] overflow-x-hidden text-white overflow-y-auto no-scrollbar h-screen fixed">
            <div>
                <button
                    onClick={() => {
                        router.back()
                    }}
                    className="w-full mb-[26px] h-[24px] flex px-[24px] my-auto text-[0.875rem] hover:bg-black/25">
                    <BiLeftArrowAlt
                        className="my-auto"
                        fontSize={20}
                    />
                    <span className="mx-1 my-auto">Back</span>
                </button>

                <div className="h-[36px] w-full flex">
                    <img
                        src="https://app.cal.com/teenfounders/avatar.png"
                        className="rounded-full w-[17px] h-[17px] ml-[14px] my-auto"
                    />
                    <span className="my-auto mx-[10px] leading-5 text-gray text-[0.875rem]"
                    >Amit Parmar</span>
                </div>

                <button
                    onClick={() => {
                        router.push("/settings/my-profile/profile")
                    }}
                    className={`font-[500] leading-5 flex px-[11px] text-[0.875rem] pt-[4px] justify-start h-[32px] w-[158px] mx-auto  hover:bg-black/25 rounded-md my-1 ${(router.pathname === "/settings/my-profile/profile") ? "bg-[#E5E7EB]" : ""}`}>
                    Profile
                </button>

            </div>
        </div>
    )
}

export default SettingsSidebar