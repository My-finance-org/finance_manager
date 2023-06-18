import moment from "moment/moment";

const dateFormater = dateString => {
  return moment(dateString).format("DD MM YYYY");
};

export default dateFormater;
