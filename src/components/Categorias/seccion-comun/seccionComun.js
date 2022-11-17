import React from "react";
import { Container } from "reactstrap";
import "../../../styles/seccion-comun.css";

const SeccionComun = (props) => {
  return (
    <section className="seccion_comun">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default SeccionComun;