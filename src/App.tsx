import HeroView from "components/Hero/View";
import HeaderView from "layouts/Header/View";

const App = () => {
  return (
    <div className='h-screen w-full flex justify-center'>
      <HeaderView />
      <HeroView />
    </div>
  );
};

export default App;
