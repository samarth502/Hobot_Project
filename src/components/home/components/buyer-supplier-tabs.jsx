    import React, { useState } from 'react';
    import postYourReq from "../../../assets/Home/postYourRequi.png";
    import checked from '../../../assets/Home/checked .png'
    import youTubeIcon from '../../../assets/Home/youTubeIcon.png'


    const BuyerSupplierTabs = () => {
    const [activeTab, setActiveTab] = useState('Buyer');

    const buyerContent = [
        { id: 1, icon: checked, text: 'Post your requirements.' },
        { id: 2, icon: checked, text: 'Sit back for multiple suppliers to contact you.' },
        { id: 3, icon: checked, text: 'Choose among the suppliers based on the ratings and reviews. ' },
    ];

    const supplierContent = [
        { id: 1, icon: checked, text: 'Complete your profile and get back' },
        { id: 2, icon: checked, text: 'Sit back for multiple suppliers to contact you.' },
        { id: 3, icon: checked, text: 'Choose among the suppliers based on the ratings and reviews. ' },
    ];

    const renderContent = () => {
        const content = activeTab === 'Buyer' ? buyerContent : supplierContent;
        return content.map((item) => (
        <div key={item.id} className="flex items-center my-2">
            <img  src={item.icon} className="text-lg mr-2"></img>
            <p className='md:text-[19px] text-[15px] text-white'>{item.text}</p>
        </div>
        ));
    };

    return (
        <section className="m-auto md:max-w-[1320px]  lg:pr-12 ">
        <div className="flex flex-col lg:flex-row justify-around items-start w-full bg-[#072F57] py-10 lg:py-28 px-14 md:gap-12 gap-0 lg:px-20">
            {/* Left Column - Image */}
            <div className="w-full relative lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0">
            <img src={postYourReq} alt="Placeholder" className="rounded-lg w-full lg:h-[350px] lg:w-[550px] h-auto max-w-md lg:max-w-xl" />
            <img src={youTubeIcon} className='absolute lg:left-[230px]  md:left-72   md:w-24 custom820:left-80 w-12 left-28 lg:top-36 md:top-20 top-[50px] custom414:left-[130px] custom414:top-[60px] custom412:left-[125px] custom412:top-[55px] custom360:left-[110px]
            custom912:left-[360px]
            custom540:left-[170px]
            custom540:top-[90px]
            custom344:top-[40px]
            custom344:left-[100px]


             ' alt="" />
            </div>

            {/* Right Column - Tabs and Content */}
            <div className="w-full lg:w-1/2 px-8  rounded-lg  flex justify-center items-center">
            <div className="flex flex-col ">
                <div className='flex justify-start md:gap-28 gap-16  mb-4 '>
                <button
                onClick={() => setActiveTab('Buyer')}
                className={`py-2 px-4 text-[28px]   ${activeTab === 'Buyer' ? 'border-b-4 border-[#EB7150] text-[#EB7150]' : ' text-white'} font-semibold`}
                >
                Buyer
                </button>
                <button
                onClick={() => setActiveTab('Supplier')}
                className={`text-[28px]  ${activeTab === 'Supplier' ? 'border-b-4 border-[#EB7150] text-[#EB7150]' : 'text-white'} font-semibold`}
                >
                Supplier
                </button>
                </div>
            <div>{renderContent()}</div>

            </div>

            </div>
        </div>
        </section>
    );
    };

    export default BuyerSupplierTabs;
