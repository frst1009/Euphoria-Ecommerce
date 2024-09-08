import { useTranslation } from "react-i18next";
import AdHolder from "../../components/adHolder/index.jsx";
import Categories from "../../components/categories/index/Categories";
import Deals from "../../components/deals/index/Deals";
import Feedback from "../../components/feedback/index/Feedback";
import Hero from "../../components/hero/index/Hero";
import Limelight from "../../components/limelight/index/Limelight";
import NewArrival from "../../components/newArrival/index/NewArrival";
import Offers from "../../components/offers/index/Offers";
import SavingZone from "../../components/savingZone/index/SavingZone";

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
