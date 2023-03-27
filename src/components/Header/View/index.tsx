import React from 'react';
import LuxSpaceLogo from 'assets/images/luxspace.png';
import HeaderController from 'components/Header/Controller';

const Header = () => {
  const controller = HeaderController();

  return (
    <header className='absolute w-full z-10 px-4'>
      <div className='container mx-auto py-5'>
        <div className='flex flex-row justify-between items-center'>
          {/* ********** LOGO ********** */}
          <div className='flex items-center w-1/2'>
            <img src={LuxSpaceLogo} alt='luxspace-logo' />
          </div>

          {/* ********** NAVIGATION BAR ********** */}
          <div className='flex justify-end items-center w-1/2'>
            <ul id='menu' className='fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center'>
              <li className='mx-3 py-6 md:py-0'>
                <a href="showcase" className=''>
                  {controller.translation.showcase}
                </a>
              </li>
              <li className='mx-3 py-6 md:py-0'>
                <a href="catalog" className=''>
                  {controller.translation.catalog}
                </a>
              </li>
              <li className='mx-3 py-6 md:py-0'>
                <a href="delivery" className=''>
                  {controller.translation.delivery}
                </a>
              </li>
              <li className='mx-3 py-6 md:py-0'>
                <a href="rewards" className=''>
                  {controller.translation.rewards}
                </a>
              </li>
            </ul>
          </div>

          {/* ********** BURGER MENU ********** */}

          {/* ********** CART ********** */}

        </div>
      </div>
    </header>
  );
};

export default Header;