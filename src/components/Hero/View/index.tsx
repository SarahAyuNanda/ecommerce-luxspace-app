import HeroController from 'components/Hero/Controller';
import ButtonView from 'components/Button/View';

const HeroView = () => {
  const controller = HeroController()

  return (
    <section className='flex flex-col justify-center items-center h-[90vh] w-full'>
      <h1 className="text-3xl md:text-4xl leading-tight font-semibold font-montserrat text-neutral-700">{controller.translation.title}</h1>
      <h2 className="px-8 text-base  md:px-0 md:text-lg my-6 tracking-wide font-montserrat text-neutral-700">{controller.translation.subtitle}</h2>
      <ButtonView label={controller.translation.explore_now} variant='filled' type='rounded' onClick={() => console.log('click explore now')} />
    </section>
  );
};

export default HeroView;