const formatDate = (timestamp) => {

  // Create a date object
    const date = new Date(timestamp);

  // Create an array of the months
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // return formatted date
    return (months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear());
};

  module.exports = formatDate;