import LuxSpaceLogo from 'assets/images/luxspace.png';
import NavigationBottomView from 'components/NavigationBottom/View';
import FooterController from 'layouts/Footer/Controller';

const FooterView = () => {
  const controller = FooterController()

  return (
    <footer className='flex flex-col justify-center items-center py-12 px-4 md:px-0'>
      <div className='mx-auto'>
        <a href='/' className='w-28'>
          <img src={LuxSpaceLogo} alt='Luxspace | Fulfill your house with beautiful furniture' />
        </a>
      </div>

      <div className='w-full flex flex-col md:flex-row py-9 gap-40'>
        <NavigationBottomView data={controller.navigationCategoryItem} />
        <div className='w-full'>
          <h5 className='font-montserrat font-semibold'>{controller.translation.SPECIAL_LETTER}</h5>
          <input type="text" />
        </div>
      </div>

      <div className='mx-auto'>
        <p className='text-xs font-montserrat'>{controller.translation.COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default FooterView;