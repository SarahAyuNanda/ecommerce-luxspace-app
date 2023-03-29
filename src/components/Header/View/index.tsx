import LuxSpaceLogo from 'assets/images/luxspace.png';
import HeaderController from 'components/Header/Controller';
import NavigationBarView from 'components/NavigationBar/View';
import SidemenuView from 'components/Sidemenu/View';

const HeaderView = () => {
  const controller = HeaderController();

  return (
    <header className='absolute w-full z-10 px-4'>
      <div className='container mx-auto py-5'>
        <div className='flex flex-row justify-between items-center'>
          {/* -------------------- LOGO -------------------- */}
          <div className='flex items-center w-1/2'>
            <a href='/' className=''>
              <img src={LuxSpaceLogo} alt='Luxspace | Fulfill your house with beautiful furniture' />
            </a>
          </div>
          {/* -------------------- END LOGO -------------------- */}

          {/* -------------------- NAVIGATION BAR -------------------- */}
          <NavigationBarView data={controller.navigationItemList} />
          {/* -------------------- END NAVIGATION BAR -------------------- */}

          {/* -------------------- SIDE MENU -------------------- */}
          <SidemenuView isOpen={controller.isShowMenu} data={controller.navigationItemList} onClose={controller.onShowHideNavigationMenu} />
          {/* -------------------- END SIDE MENU -------------------- */}

          {/* -------------------- ICON MENU -------------------- */}
          <div className='flex justify-end items-end w-auto z-0'>
            <ul className='items-center flex'>
              {/* -------------------- BURGER MENU -------------------- */}
              <li className='ml-6 block md:hidden p-1 rounded-full ease-in-out duration-300 hover:bg-gray-100 active:bg-gray-100'>
                <button id='burger-menu' className='relative flex items-center justify-center w-8 h-8 focus:outline-none' onClick={controller.onShowHideNavigationMenu}>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                  </svg>
                </button>
              </li>

              {/* -------------------- CART MENU -------------------- */}
              <li className='ml-6 p-1 rounded-full ease-in-out duration-300 hover:bg-gray-100 active:bg-gray-100'>
                <a href='cart' id='cart' className='flex items-center justify-center w-8 h-8'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' strokeWidth='1.5' stroke='currentColor' viewBox='0 0 26 24' className='w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* -------------------- END ICON MENU -------------------- */}

        </div>
      </div>
    </header>
  );
};

export default HeaderView;