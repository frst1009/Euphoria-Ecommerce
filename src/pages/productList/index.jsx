import Clothing from "../../components/clothing/Clothing.jsx";
import ClothingFor from "../../components/clothingFor/ClothingFor.jsx";
import Filter from "../../components/filter/Filter.jsx";
import "./style.scss";
function ProductsDetail() {
  return (
    <>
      <div className="container product-list">
        <Filter />
        <Clothing />
      </div>
      <div className="container">
        <ClothingFor />
      </div>
    </>
  );
}

export default ProductsDetail;
