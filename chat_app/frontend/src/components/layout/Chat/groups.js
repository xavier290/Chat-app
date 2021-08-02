import React, { Fragment } from "react";

import Menu from "../menu/menu";
import CreateGroup from "./addGroups";

function Groups() {
  return (
    <Fragment>
      <Menu />
      <div className="groups">
        <CreateGroup />
      </div>
    </Fragment>
  );
}

export default Groups;
