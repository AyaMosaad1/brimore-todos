<template>
   <div class="container">

   <div class="my-4">
      <Filter />
   </div>

    <a-form-item class="ml-5">
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
import Filter from '@/components/filter.vue';

export default {
  name: 'TodoList',
  components: {
    Todo,
    Filter,
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
    getTodos() {
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
      this.getTodos();
      console.log(e.target.value);
    },
  },
  computed: mapGetters(['allTodos', 'CompletedTodos', 'pendTodos']),
  created() {
    this.fetchTodos();
  },
};
</script>
