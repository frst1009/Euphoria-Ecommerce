import { useTranslation } from "react-i18next";
import AdHolder from "../../components/adHolder/index.jsx";
import Categories from "../../components/categories/index.jsx";
import Deals from "../../components/deals/index.jsx";
import Feedback from "../../components/feedback/index.jsx";
import Hero from "../../components/hero/index.jsx";
import Limelight from "../../components/limelight/index.jsx";
import NewArrival from "../../components/newArrival/index.jsx";
import Offers from "../../components/offers/index.jsx";
import SavingZone from "../../components/savingZone/index.jsx";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div style={{ width: "100%" }}>
      {/* <Navbar /> */}
      <div id="home">
        <Hero />
      </div>
      <Offers />
      <NewArrival />
      <SavingZone />

      <div id="ad">
        <AdHolder />
      </div>
      <div id="men">
        <Categories type={"men"} count={8} />
      </div>
      <div id="women">
        <Categories type={"women"} count={4} />
      </div>
      <div id="combos">
        <Deals />
      </div>
      <div id="joggers">
        <Limelight count={4} type={t("in_the_limelight")} />
      </div>
      <Feedback />
    </div>
  );
}
