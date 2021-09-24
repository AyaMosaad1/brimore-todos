<template>
<div class="container">
  <b-card no-body class="mb-3">
    <b-button class="closeButton" variant="danger" @click="clickonD($event , todo.id)">
      <b-icon icon="calendar-x"></b-icon>
    </b-button>
    <b-button variant="outline-info" class="text-dark col-lg-12 mt-5"
    size="lg" @click="clickonDB($event)">
    <div class="row">
    <b-card class="px-5 mb-3 col-lg-8">
    {{ todo.title }} with id is {{ todo.id }}
      <b-form-checkbox button button-variant="info"
      class="mx-5 inlineButton float-right">
          <b>(Checked: {{ todo.completed ? 'Completed' : 'pending'}})</b>
      </b-form-checkbox>
    </b-card>
       <div class="col-lg-3 mt-4 ml-5">
        <b-button class="mx-5" variant="dark" @click="clickon($event);">
          <b-icon icon="pencil" ></b-icon>
        </b-button>

       </div>
    </div>
      </b-button>
  </b-card>
</div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';

export default {

  name: 'TodoList',
  props: {
    todo: Object,
  },
  methods: {
    clickon(e:any) {
      e.stopPropagation();
      console.log('click on edit');
    },
    clickonD(e:any, id:any) {
      e.stopPropagation();
      this.deleteTodo(id);
      console.log('click on delete and delete :', id);
    },
    clickonDB(e:any) {
      e.stopPropagation();
      console.log('click on button');
    },
    ...mapActions(['deleteTodo']),
  },
};
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
