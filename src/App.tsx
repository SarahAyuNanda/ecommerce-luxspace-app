import HeaderView from "components/Header/View";
import HeroView from "components/Hero/View";

const App = () => {
  return (
    <div className='h-screen w-full flex justify-center'>
      <HeaderView />
      <HeroView />
    </div>
  );
};

export default App;
