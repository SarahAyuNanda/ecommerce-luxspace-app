import ISidemenuProps from 'components/Sidemenu/Model';

const SidemenuView = ({ isOpen = false, data, onClose }: ISidemenuProps) => {
  return (
    <aside className={`fixed top-0 right-0 z-10 md:hidden w-screen h-screen flex justify-between items-start flex-row ease-in-out duration-300 ${isOpen ? '-translate-x-0' : 'translate-x-full'}`}>
      {/* ----------------------------------- LEFT VIEW ----------------------------------- */}
      <div className='w-screen h-screen backdrop-blur-sm' onClick={onClose}></div>
      {/* --------------------------------- END LEFT VIEW --------------------------------- */}


      {/* ---------------------------------- RIGHT VIEW ----------------------------------- */}
      <div className='relative w-96 max-w-[calc(100%-3rem)] h-screen py-10 px-7 bg-white shadow-light'>
        {/* --------------------------------- CLOSE BUTTON ---------------------------------- */}
        <button id='close-menu' className='fixed top-0 right-0 m-5 flex z-50 items-center justify-center w-9 h-9 p-1 rounded-full ease-in-out duration-300 hover:bg-gray-100 active:bg-gray-100 text-neutral-700' onClick={onClose}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* --------------------------------- MENU CONTENT ---------------------------------- */}
        <div className='flex flex-col justify-start items-start w-full mt-8 border-gray-600'>
          {data.map(item => (
            <button key={item.label} className='w-full focus:outline-none hover:bg-tuscany rounded ease-in-out duration-150'>
              <a href={item.link} className='flex justify-start items-start flex-row gap-5 p-3 font-montserrat text-neutral-700 hover:text-white '>
                {item.icon}
                <p>{item.label}</p>
              </a>
            </button>
          ))}
        </div>
      </div>
      {/* -------------------------------- END RIGHT VIEW --------------------------------- */}
    </aside>
  );
};

export default SidemenuView;