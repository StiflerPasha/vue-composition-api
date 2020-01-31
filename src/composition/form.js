import { computed, reactive } from '@vue/composition-api';

export function useForm(emit) {
  const form = reactive({
    title: '',
    description: ''
  });
  
  const onSubmit = () => {
    const recipe = {
      title: form.title.trim(),
      description: form.description.trim(),
      id: Date.now().toString()
    };
    
    form.title = form.description = '';
    
    console.log(recipe);
    emit('add', recipe);
  };
  
  const isEmpty = computed(() => {
    return form.title.trim() && form.description.trim();
  });
  
  return {
    form, onSubmit, isEmpty
  };
}
