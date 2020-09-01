import React from "react";
import { ColumnsContainer, Column } from "./ThreeColumns.styled";

export const ThreeColumns = () => {
  return (
    <ColumnsContainer>
      <section>
        <Column>
          <h1>10</h1>
          <h2>ODDANYCH WORKÓW</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </Column>
        <Column>
          <h1>5</h1>
          <h2>WSPARTYCH ORGANIZACJI</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </Column>
        <Column>
          <h1>7</h1>
          <h2>ZORGANIZOWANY ZBIÓREK</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </Column>
      </section>
    </ColumnsContainer>
  );
};
