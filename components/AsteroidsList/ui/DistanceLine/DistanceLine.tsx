import styles from "./DistanceLine.module.css";
import { FC, memo, useEffect, useRef } from "react";
import { MissDistanceUnit } from "../AsteroidList/AsteroidsList";
import { formatOrbits } from "../../lib/declensionUnit";

interface DistanceLineProps {
  distance: string;
  unit: MissDistanceUnit;
}

export const DistanceLine: FC<DistanceLineProps> = memo(
  ({ distance, unit }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
      if (textRef.current && svgRef.current) {
        const textElement = textRef.current;
        const textWidth = textElement.offsetWidth;
        const textHeight = textElement.offsetHeight;
        const svgElement = svgRef.current;
        svgElement.setAttribute("width", `${textWidth}px`);
        svgElement.setAttribute("height", `${textHeight}px`);
      }
    }, []);
    return (
      <div className={styles.distanceLine}>
        <div className={styles.text} ref={textRef}>
          {unit === MissDistanceUnit.LUNAR
            ? formatOrbits(distance)
            : `${distance} км`}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="6"
          viewBox="0 0 105 6"
          fill="none"
          ref={svgRef}
        >
          <path
            d="M0 3L5 5.88675L5 0.113249L0 3ZM105 3.00001L100 0.113257L100 5.88676L105 3.00001ZM4.5 3.5L100.5 3.50001L100.5 2.50001L4.5 2.5L4.5 3.5Z"
            fill="white"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    );
  }
);
DistanceLine.displayName = "DistanceLine";
