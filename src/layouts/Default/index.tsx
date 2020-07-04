import React from "react";

import ServerList from "../../components/ServerList";

import { Grid } from "./styles";

const Default: React.FC = () => {
  return (
    <Grid>
      <ServerList />
    </Grid>
  );
};

export default Default;
