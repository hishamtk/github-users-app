import React from "react";
import { Alert } from "@material-ui/lab";

const AlertItem = ({ alert }) => {
  return (
    alert && (
      <Alert variant="filled" severity={alert.type}>
        {alert.msg}
      </Alert>
    )
  );
};

export default AlertItem;
