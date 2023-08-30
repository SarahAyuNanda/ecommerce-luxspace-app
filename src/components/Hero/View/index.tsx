import React from 'react';
import HeroController from 'components/Hero/Controller';
import ButtonView from 'components/Button/View';

const HeroView = () => {
  const controller = HeroController()

  return (
    <section className='flex items-center h-[90vh] w-full'>
      <div className='w-full px-8 absolute z-0 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center items-center md:min-h-[90vh]'>
        <h1 className="text-3xl md:text-4xl leading-tight font-semibold font-montserrat text-neutral-700">{controller.translation.title}</h1>
        <h2 className="px-8 text-base  md:px-0 md:text-lg my-6 tracking-wide font-montserrat text-neutral-700">{controller.translation.subtitle}</h2>
        <ButtonView label={controller.translation.explore_now} variant='filled' type='rounded' onClick={() => console.log('click explore now')} />
      </div>

      <div className='w-full inset-0 md:relative md:w-1/2 bg-black opacity-40'>
        <div className='relative md:min-h-[90vh]'>
          <div className='inset-0 bg-black opacity-40 z-10' />
          <div className='right-0 bottom-0 md:inset-0'>
            <button>

            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroView;