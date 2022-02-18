const TodosApp = {
  data() {
    return {
      todos: [],
      enteredText: "",
      editedTodoId: null,
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();

      if (this.editedTodoId) {
        // updating
        const todoId = this.editedTodoId;
        const todoIndex = this.todos.findIndex(
          (todoItem) => todoItem.id === todoId
        );
        const updatedTodo = {
          id: this.todos[todoIndex].id,
          text: this.enteredText,
        };
        this.todos[todoIndex] = updatedTodo;
        this.editedTodoId = null;
      } else {
        // creating
        const newTodo = {
          text: this.enteredText,
          id: new Date().toISOString(),
        };
        this.todos.push(newTodo);
      }

      this.enteredText = "";
    },
    startEdit(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find((todoItem) => todoItem.id === todoId);
      this.enteredText = todo.text;
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todoItem => todoItem.id !== todoId);
    }
  },
};

Vue.createApp(TodosApp).mount("#todos-app");
