import Image from "next/image";
import { Main } from "next/document";
import dashboardTop from "./Dashboard/dashboardTop";
import dashboardBottom from "./Dashboard/dashboardBottom";
import TextInput from "./Components/InputComponent";
import CityAndTemperature from "./Dashboard/dashboardTop";
import FiveDay from "./Dashboard/dashboardBottom";

export default function Home() {
  return (
    <>
    {/**Code goes here */}
    
    <div>
      <CityAndTemperature/>
      <FiveDay/>
    </div>
    </>
  );
}
