import { H2 } from "./styled";
import PropTypes from "prop-types";

export const Notification =({ message})=> {

    return (
      <section>
        <H2>{message}</H2>
      </section>
    );
  }


Notification.propTypes = {
message: PropTypes.string.isRequired,
};