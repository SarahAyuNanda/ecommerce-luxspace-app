import ISidemenuProps from "layouts/Sidemenu/Model";

const SidemenuView = ({ isOpen = false, data, onClose }: ISidemenuProps) => {
  return (
    <aside className={`fixed top-0 right-0 z-10 md:hidden w-screen h-screen flex justify-between items-start flex-row transition ease-in-out duration-700 ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className='relative w-full h-screen py-10 px-7 bg-white shadow-light'>
        {/* --------------------------------- CLOSE BUTTON ---------------------------------- */}
        <button id='close-menu' className='fixed top-0 right-0 m-5 flex z-50 items-center justify-center w-9 h-9 p-1 rounded-full ease-in-out duration-300 hover:bg-gray-100 active:bg-gray-100 text-neutral-700' onClick={onClose}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* --------------------------------- MENU CONTENT ---------------------------------- */}
        <div className='flex flex-col w-full mt-8'>
          {data.map(item => (
            <button key={item.label} onClick={onClose} className='w-full focus:outline-none hover:bg-tuscany rounded transition-all'>
              <div className='flex justify-center items-center flex-row gap-5 p-3 font-montserrat text-neutral-700 hover:text-white'>
                {/* {item.icon} */}
                <p>{item.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidemenuView;