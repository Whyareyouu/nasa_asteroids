import { MissDistanceUnit } from "../../../components/AsteroidsList/ui/AsteroidList/AsteroidsList";

export type StateSchema = {
  id: string;
  name: string;
  estimatedDiameter: number;
  isPotentiallyHazardousAsteroid: boolean;
  closeApproachDateFull: string;
  missDistance: string;
  unit: MissDistanceUnit;
};
