
import { useSelector } from "react-redux";
import IcecreamCone from "./IcecreamCone";
import IcecreamCube from "./IcecreamCube";

function IcecreamStore() {
    
    const { icecreams } = useSelector(state => state.icecream);

    return (
        <div className="icecream_store">
            <div>
                {icecreams ? icecreams.map((icecream, index) => {
                    if (index === icecreams.length - 1) {
                        return (
                            <IcecreamCube key={index} hasmb={false} icecream_color={icecream.color} />
                        )
                    } else {
                        return (
                            <IcecreamCube key={index} hasmb={true} icecream_color={icecream.color} />
                        )
                    }
                }) : null}
                <IcecreamCone />
            </div>
        </div>
    );
}

export default IcecreamStore;