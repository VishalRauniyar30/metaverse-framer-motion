const NewFeatures = ({ imgUrl, title, subtitle }) => {
    return (
        <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
            <div className='flex items-center justify-center w-[70px] h-[70px] rounded-3xl bg-[#323f5d]'>
                <img src={imgUrl} alt="icon" className='w-1/2 h-1/2 object-contain' />
            </div>
            <h1 className='mt-7 font-bold text-2xl leading-[30.24px] text-white'>
                Title {title}
            </h1>
            <p className='flex-1 mt-4 font-normal text-lg text-[#b0b0b0] leading-[32.4px]'>
                {subtitle}
            </p>
        </div>
    )
}

export default NewFeatures