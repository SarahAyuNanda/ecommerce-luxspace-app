import INavigationBarProps from 'components/NavigationBar/Model';

const NavigationBarView = ({ data }: INavigationBarProps) => {
  return (
    <div className='flex justify-end items-center w-1/2'>
      <ul id='menu' className='fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center'>
        {data.map(item => (
          <li key={item.label} className='mx-3 py-6 md:py-0'>
            <a href={item.path} className='text-neutral-700 hover:text-neutral-900 ease-in-out duration-150 font-montserrat'>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBarView;