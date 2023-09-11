import { IDropdownLanguage } from "components/DropdownLanguage/Model";

const DropdownLanguageView = ({ isShow, value, data, onOpen, onSelect }: IDropdownLanguage) => {
  return (
    <div className='relative p-1 rounded-full ease-in-out duration-300 active:bg-gray-100 text-neutral-700'>
      <button id='lang' className='flex items-center justify-center w-8 h-8' onClick={onOpen}>
        <img src={value} alt='id-lang' className='w-[28px] h-[28px]' />
      </button>
      {/* ------------------------------- DROPDOWN LANGUAGE ------------------------------- */}
      <ul className={`${isShow ? 'block' : 'hidden'} absolute flex flex-col z-50 top-10 right-0 w-max bg-white rounded shadow-lg overflow-visible text-neutral-700 font-montserrat ease-in-out duration-700`} aria-orientation='vertical' role='listbox' tabIndex={0}>
        {data.map((item, idx) => (
          <li key={idx} data-value={item.value} onClick={onSelect} className='flex items-center px-3 pt-1 pb-2 gap-2 cursor-pointer hover:bg-gray-100 hover:rounded' role='option' tabIndex={-1} aria-selected>
            <img src={item.icon} alt={`${item.value}-lang`} className='w-[28px] h-[28px]' />
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownLanguageView;