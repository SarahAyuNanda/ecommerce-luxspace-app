import FooterView from "layouts/Footer/View";
import HeroView from "components/Hero/View";
import HeaderView from "layouts/Header/View";

const App = () => {
  return (
    <div className='container h-screen mx-auto text-neutral-700'>
      <HeaderView />
      <HeroView />
      <FooterView />
    </div>
  );
};

export default App;
