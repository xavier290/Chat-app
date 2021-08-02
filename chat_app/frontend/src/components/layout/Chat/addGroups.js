import React, { Fragment, useState } from "react";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { GroupData } from "./groupData";

function CreateGroup() {
  const [section, setSection] = useState(false);

  const showSection = () => setSection(!section);

  const name = document.getElementById("group-name");

  const createNewGroup = (e) => {
    e.preventDefault();

    if (name.value === "" || name.value == null) {
      alert("you have to put a group's name");
      GroupData.pop();
    }

    let data = {
      id: new Date(),
      room_name: name.value,
    };

    GroupData.push(data);
    localStorage.setItem("groupsList", JSON.stringify(GroupData));

    showSection();
  };

  return (
    <Fragment>
      <div className="toggle-add-group" onClick={showSection}>
        <AddCircleOutlineIcon />
      </div>
      <section className={section ? "section-active" : ""}>
        <div className="add-group">
          <label>Type New Group's name</label>
          <input type="text" name="roomName" required="True" id="group-name" />

          <div className="buttons">
            <button
              className="create-btn btn"
              type="submit"
              onClick={createNewGroup}
            >
              Create Group
            </button>
            <button className="cancel-btn" onClick={showSection}>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default CreateGroup;
