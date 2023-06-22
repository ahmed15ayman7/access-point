import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Switch from "./Switch";

function FormFilteration({ setNumPro }) {
  let products = useSelector((s) => s.getDate.products);

  let isOn = useSelector((s) => s.filter.isOn);
  let classesProduct = new Set(products.map((e) => e.category));
  let clPro = [...classesProduct];

  return (
    <Form
      className="mt-5 p-4 formFilter"
      style={{ maxHeight: "80vh", overflow: "scroll" }}>
      <div className="option-filter">
        {clPro.map((e, i) => (
          <Switch
            key={i}
            setNumPro={setNumPro}
            name={e}
            toglison={isOn[i] ? isOn[i] : false}
            label={
              e.split(" ")[0].length > 8
                ? e.slice(0, 7)
                : e.split(" ").length > 0
                ? e.split(" ")[0]
                : null
            }
          />
        ))}
      </div>
    </Form>
  );
}
export default FormFilteration;
