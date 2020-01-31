<template>
  <form class="form" @submit.prevent="onSubmit">
    <h1>Добавить рецепт</h1>
    <div v-if="visible">
      <div class="input">
        <input v-model="form.title" type="text" placeholder="Название рецепта">
      </div>
      <div class="input">
        <input v-model="form.description" type="text" placeholder="Описание рецепта">
      </div>
    </div>

    <div class="buttons">
      <button class="btn" type="submit" :disabled="!isEmpty"
      >Создать
      </button>
      <button class="btn secondary" type="button" @click="toggle"
      >{{visible ? 'Убрать форму' : 'Показать форму'}}
      </button>
    </div>
  </form>
</template>

<script>
  import { useToggle } from '@/composition/toggle';
  import { useForm }   from '@/composition/form';

  export default {
    setup(props, { emit }) {
      return {
        ...useForm(emit),
        ...useToggle()
      };
    }


    /* data() {
       return {
         title: '',
         description: ''
         visible: true
       };
     },*/
    /*methods: {
      toggle() {
        this.visible = !this.visible;
      },
      onSubmit() {
        const recipe = {
          title: this.title.trim(),
          description: this.description.trim(),
          id: Date.now().toString()
        };

        this.title = this.description = '';

        this.$emit('add', recipe);
      }
    },*/
    /*computed: {
      isEmpty() {
        return this.title.trim() && this.description.trim();
      }
    }*/
  };
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
  }

  .form h1 {
    margin: 0 0 1rem;
  }

  .input {
    margin-bottom: 1rem;
  }

  .input input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: 400px;
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
</style>
