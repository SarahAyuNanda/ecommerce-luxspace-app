import React from 'react';
import HeroController from 'components/Hero/Controller';
import ButtonView from 'components/Button/View';

const HeroView = () => {
  const controller = HeroController()

  return (
    <section className='flex items-center md:min-h-[90vh]'>
      <div className='container mx-auto'>
        <div className='w-full absolute z-0 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center md:min-h-[90vh]'>
          <h1 className="text-3xl md:text-4xl leading-tight font-semibold font-montserrat">{controller.translation.title}</h1>
          <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide font-montserrat">{controller.translation.subtitle}</h2>
          <ButtonView label={controller.translation.explore_now} variant='filled' onClick={() => console.log('click explore now')} />
        </div>
      </div>
    </section>
  );
};

export default HeroView;