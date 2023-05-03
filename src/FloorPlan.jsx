import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";


const FloorPlan = (props) => {
  return ( 
    <div className="floor-plan">
      <Kitchen />
      <Bedroom bednum={1} />
      <Bath size={'Full'} />
      <Bath size={'Half'} />
      <LivingRoom />
      <Bedroom bednum={2} />
      <Bedroom bednum={3} />
    </div>
  );
}


export default FloorPlan;