<template>
<div class="container">
  <b-card no-body class="mb-3">
    <b-button class="closeButton" variant="danger" @click="clickDelete($event , todo.id)">
      <b-icon icon="calendar-x"></b-icon>
    </b-button>
    <b-button variant="outline-info" class="text-dark col-lg-12 mt-5"
    size="lg" @click="clickUpdate($event, todo)" :disabled = todo.completed >
    <div class="row">
    <b-card class="px-5 mb-3 col-lg-8">
    {{ todo.title }} with id is {{ todo.id }}
      <b-form-checkbox button button-variant="info"
      class="mx-5 inlineButton float-right">
          <b>(Checked: {{ todo.completed ? 'Completed' : 'Not completed'}})</b>
      </b-form-checkbox>

    </b-card>
       <div class="col-lg-3 mt-4 ml-5">
        <b-button class="mx-5" variant="dark" @click="clickon($event);showModal()">
          <b-icon icon="pencil" ></b-icon>
        </b-button>
        <a-modal
        title="Title"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="handleOkUpdate(todo)"
        @cancel="handleCancel()"
      >

      <div class='form-group row'>
        <label for='Name' class='col-sm-1 col-lg-2 h2 lead mt-2'></label>
        <div class='col-sm-4 col-lg-8' >
          <b-form-input size='lg' type="text" v-model="newTitle" class='form-control'>
          </b-form-input>
        </div>
      </div>

      </a-modal>

       </div>
    </div>
      </b-button>
  </b-card>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import TodoModel from '../models/todoModel';

export default defineComponent({

  name: 'TodoList',
  props: {
    todo: Object,
  },
  data() {
    return {
      visible: false,
      confirmLoading: false,
      newTitle: '',
    };
  },
  methods: {
    clickDelete(e:Event, id:number) {
      e.stopPropagation();
      this.deleteTodo(id);
    },
    clickUpdate(e:Event, todo:TodoModel) {
      e.stopPropagation();
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updatedTodo);
    },
    showModal() {
      this.visible = !this.visible;
    },
    handleOkUpdate(todo:TodoModel) {
      this.confirmLoading = true;
      const updatedTodo = {
        id: todo.id,
        title: this.newTitle,
        completed: todo.completed,
      };
      this.updateTodo(updatedTodo);
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 1000);
    },
    handleCancel():void {
      this.visible = false;
    },
    ...mapActions(['deleteTodo', 'updateTodo']),
  },
});
</script>

<style scoped>
.inlineButton{
  display:inline-block;
}
.closeButton{
  position: absolute;
  right:0;
}
.editButton{
  right:0;
}
</style>
