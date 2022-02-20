import IcecreamStore from "./IcecreamStore";
import IcecreamAdd from "./IcecreamAdd";

function Icecream() {
    return (
        <div className="icecream">
            <IcecreamStore />
            <IcecreamAdd/>
        </div>
    )
}

export default Icecream;