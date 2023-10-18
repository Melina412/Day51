const TodoList = (props) => {
  //   console.log(props);
  const data_array = [
    "Buy Groceries",
    "Send Email",
    "Finish Assignment",
    "Write Blog",
    "Bake Cake",
  ];
  return (
    <section>
      <ul>
        <li>{data_array[0]}</li>
        <li>{data_array[1]}</li>
        <li>{data_array[2]}</li>
        <li>{data_array[3]}</li>
        <li>{data_array[4]}</li>
      </ul>
    </section>
  );
};

export default TodoList;
