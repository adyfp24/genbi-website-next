import { CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";

interface SpinnerProps {
    color?: string;
    speed?: number; 
}

const Spinner: React.FC<SpinnerProps> = ({ color = "#70a5ff", speed = 1 }) => {
    const override: CSSProperties = {
        margin: "0 auto",
        color: color,
        // animationDuration: `${speed}s`, 
    };

    return (
        <BeatLoader
            color={color}
            loading={true}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Spinner;
