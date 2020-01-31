import { ref } from '@vue/composition-api';

export function useRecipes() {
  const recipes = ref([]);
  const currentRecipe = ref(null);
  
  const addRecipe = recipe => {
    recipes.value.push(recipe);
  };
  
  const selectRecipe = id => {
    currentRecipe.value = recipes.value.find(r => r.id === id);
  };
  
  const removeRecipe = id => {
    currentRecipe.value = null;
    recipes.value = recipes.value.filter(r => r.id !== id);
  };
  
  return {
    recipes, currentRecipe, addRecipe, selectRecipe, removeRecipe
  };
  
}
