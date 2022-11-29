import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton
} from "@mui/material";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material/";
import PropTypes from "prop-types";
// import Styles from "../style/Styles";

const ListCard = props => {
    // console.log(props);
  const {
    classes,
    Id,
    Name,
    Occupation,
    Description,
    handleUpdate,
    removeData
  } = props;
  const styles = {
    card: {
        width: 400,
        margin: "20px auto",
        cursor: "pointer",
        transition: "box-shadow .3s",
        position: "relative",
        "&:hover": {
          boxShadow: "0 0 25px rgba(33,33,33,.2)"
        }
      },
      delete: {
        position: "absolute",
        right: 0,
        top: 0
      },
      edit: {
        position: "absolute",
        right: "40px",
        top: 0
      },
      body: {
        color: "rgba(0,0,0,0.6)"
      },
      details: {
        width: "80%",
        margin: "0 auto",
        marginTop: "10px"
      }

};

  return (
    <Card className={styles.card} elevation={1}>
      <CardContent>
        <IconButton
          aria-label="Update"
          className={styles.edit}
          onClick={e => handleUpdate(e, Id)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          aria-label="Delete"
          className={styles.delete}
          onClick={() => removeData(Id)}
        >
          <DeleteOutlined />
        </IconButton>
        <Typography variant="h4" className={styles.name}>
          {Name}
        </Typography>
        <Typography variant="h6" className={styles.body}>
          {Occupation}
        </Typography>
        <Typography variant="body1" className={styles.details}>
          {Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ListCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.number,
  Name: PropTypes.string.isRequired,
  Occupation: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  removeData: PropTypes.func.isRequired
};

export default ListCard;
