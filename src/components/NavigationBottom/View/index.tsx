import INavigationBottomProps from "components/NavigationBottom/Model";

const NavigationBottomView = ({ data }: INavigationBottomProps) => {
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between gap-4'>
      {data.map(detail => (
        <div key={detail.category} className='w-full md:w-max'>
          <h5 className='font-montserrat font-semibold'>{detail.category}</h5>
          <ul>
            {detail.item.map(subitem => (
              <li key={subitem.label}>
                <a href={subitem.path} className='font-montserrat text-sm'>{subitem.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavigationBottomView;