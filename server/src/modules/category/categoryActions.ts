// Some data to make the trick
const categories = [
  { id: 1, name: "Comédie" },
  { id: 2, name: "Science-Fiction" },
];

// Declare the actions
const browse = () => {
  return categories;
};

const read = (id: number) => {
  return categories.find((category) => category.id === id) || null;
};

// Export them to import them somewhere else
export default {
  browse,
  read,
};
