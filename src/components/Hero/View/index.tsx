import HeroBackground from 'assets/images/background.png';
import HeroController from 'components/Hero/Controller';
import ButtonView from 'components/Button/View';

const HeroView = () => {
  const controller = HeroController()

  return (
    <section className='flex justify-center items-center h-[100vh] w-full'>
      <div className='w-full h-[90vh] z-10 flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-4xl leading-tight font-semibold font-montserrat'>{controller.translation.title}</h1>
        <h2 className='px-8 text-base  md:px-0 md:text-lg my-6 tracking-wide font-montserrat'>{controller.translation.subtitle}</h2>
        <ButtonView label={controller.translation.explore_now} variant='filled' type='rounded' onClick={() => console.log('click explore now')} />
      </div>
      <img src={HeroBackground} alt='background' className='w-full h-[100vh] absolute inset-0 object-center object-cover' />
    </section>
  );
};

export default HeroView;