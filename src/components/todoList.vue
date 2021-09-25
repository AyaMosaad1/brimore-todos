<template>
   <div class="container">
    <a-form-item
      label="the todos list"
    >
      <a-radio-group default-value="horizontal" class="lg"
       @change="handleFormLayoutChange"
       >
        <a-radio-button value="all">
          All todos
        </a-radio-button>
        <a-radio-button value="completed">
          completed todos
        </a-radio-button>
        <a-radio-button value="Apend">
        Non completed todos
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
        <div
        v-for="todo in todoArr"
        v-bind:key="todo.key"
        >
        <Todo
        :todo ="todo"
        />
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Todo from '@/components/todo.vue';
import TodoModel from '../models/todoModel';

export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  data() {
    return {
      todoArr: TodoModel,
      todosType: 'completed',
      type: String,
    };
  },
  methods: {
    ...mapActions(['fetchTodos']),
    test() {
      if (this.type === 'completed') {
        this.todoArr = this.CompletedTodos;
      } else if (this.type === 'Apend') {
        this.todoArr = this.pendTodos;
      } else {
        this.todoArr = this.allTodos;
      }
    },
    handleFormLayoutChange(e) {
      this.type = e.target.value;
      this.test();
      console.log(e.target.value);
    },
  },
  computed: mapGetters(['allTodos', 'CompletedTodos', 'pendTodos']),
  created() {
    this.fetchTodos();
    // this.test();
  },
  // updated() {
  //   this.test();
  //   console.log(this.todoArr);
  // },
};
</script>
