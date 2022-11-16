import React from "react";
import {TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
// import Styles from "../style/Styles";

const CreateData = props => {

    const styles = {
        formWrapper: {
            width: "80%",
            margin: "30px auto"
          },
          button: {
            marginTop: 40
          },
    };
  const {
    Id,
    Name,
    Occupation,
    Description,
    handleChange,
    addData,
    saveUpdate,
    classes,
    isEditing
  } = props;

  return (
    <div className={styles.formWrapper}>
    {/* <> */}
      <form onSubmit={addData}>
        <TextField
          id="name-id"
          name="Name"
          label="Name"
          onChange={handleChange}
          value={Name}
          fullWidth
          required
        />
        <TextField
          id="occupation-id"
          name="Occupation"
          label="Occupation"
          onChange={handleChange}
          value={Occupation}
          fullWidth
          required
        />
        <TextField
          id="desc-id"
          name="Description"
          label="Description"
          onChange={handleChange}
          value={Description}
          fullWidth
          required
        />
        {isEditing ? (
          <Button
            type="submit"
            variant="outlined"
            className={styles.button}
            onClick={e => saveUpdate(e, Id)}
            fullWidth
          >
            Update
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            className={styles.button}
            fullWidth
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

CreateData.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.number,
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Occupation: PropTypes.string.isRequired,
  addData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveUpdate: PropTypes.func.isRequired
};

export default CreateData;
