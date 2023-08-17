import { Button, ButtonTheme } from "../../Button/Button";

export const Asteroid = () => {
  return (
    <div>
      <p>date</p>
      <div>
        <p>distance</p>
        <div>
          <p>Asteroid</p>
          <div>
            <p>Size</p>
            <p>icon</p>
          </div>
        </div>
      </div>
      <Button theme={ButtonTheme.SECONDARY}>Заказать</Button>
    </div>
  );
};
