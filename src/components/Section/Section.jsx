import { SectionConteiner } from "./styled";
import PropTypes from "prop-types";

export const Section =({ title, children })=> {

    return (
      <SectionConteiner>
        <h2>{title}</h2>
        {children}
      </SectionConteiner>
    );
  }


Section.propTypes = {
title: PropTypes.string.isRequired,
children: PropTypes.node.isRequired,
};