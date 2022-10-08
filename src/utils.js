const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  //array.from is used to create array of arrays
  //{ length: numberOfPages } new array with that may pages is created
  //(_, index) callback function that iterates over array
  return newFollowers;
};

export default paginate;
