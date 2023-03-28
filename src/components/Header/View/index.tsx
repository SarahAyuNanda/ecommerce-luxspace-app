import LuxSpaceLogo from 'assets/images/luxspace.png';
import HeaderController from 'components/Header/Controller';
import { useEffect } from 'react';

const Header = () => {
  const controller = HeaderController();

  // -------------------- RENDER --------------------
  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 768 && controller.setIsShowMenu(false))
  })

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

          {/* -------------------- NAVIGATION BAR -------------------- */}
          <div className='flex justify-end items-center w-1/2'>
            <ul id='menu' className='fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center'>
              <li className='mx-3 py-6 md:py-0'>
                <a href='showcase' className='hover:color'>
                  {controller.translation.showcase}
                </a>
              </li>
              <li className='mx-3 py-6 md:py-0'>
                <a href='catalog' className=''>
                  {controller.translation.catalog}
                </a>
              </li>
              <li className='mx-3 py-6 md:py-0'>
                <a href='delivery' className=''>
                  {controller.translation.delivery}
                </a>
              </li>
              <li className='mx-3 py-6 md:py-0'>
                <a href='rewards' className=''>
                  {controller.translation.rewards}
                </a>
              </li>
            </ul>
          </div>

          {/* -------------------- TOP MENU -------------------- */}
          <div className={`fixed top-0 right-0 p-5 z-10 md:hidden w-screen h-1/2 flex justify-center items-start ${controller.isShowMenu ? 'translate-y-0' : '-translate-y-full'} ease-in-out duration-500 bg-white shadow-light`}>
            <button id='close-menu' className='fixed top-0 right-0 m-5 flex z-50 items-center justify-center w-8 h-8 focus:outline-none' onClick={controller.onShowHideNavigationMenu}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {/* -------------------- MENU -------------------- */}
          <div className='flex justify-end items-end w-auto z-0'>
            <ul className='items-center flex'>
              {/* -------------------- BURGER MENU -------------------- */}
              <li className='ml-6 block md:hidden'>
                <button id='burger-menu' className='relative flex z-50 items-center justify-center w-8 h-8 focus:outline-none' onClick={controller.onShowHideNavigationMenu}>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 21' stroke-width='1.5' stroke='currentColor'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                  </svg>
                </button>
              </li>

              {/* -------------------- CART MENU -------------------- */}
              <li className='ml-6'>
                <a href='cart' id='cart' className='flex items-center justify-center w-8 h-8'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke-width='1.5' stroke='currentColor' width={26} height={24} viewBox='0 0 26 24'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
                  </svg>

                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;