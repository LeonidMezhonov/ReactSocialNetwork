import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>{props.status || "-------"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus
            onFocus={(e) => e.target.select()}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            type="text"
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
