// 食谱数据库
const recipes = {
    breakfast: [
        {
            name: '全麦吐司配煎蛋',
            calories: 320,
            protein: 15,
            carbs: 40,
            fat: 12,
            ingredients: ['全麦吐司 2片', '鸡蛋 1个', '牛油果 1/2个', '西红柿 1个']
        },
        {
            name: '燕麦牛奶杯',
            calories: 280,
            protein: 12,
            carbs: 45,
            fat: 8,
            ingredients: ['燕麦 50g', '低脂牛奶 200ml', '蓝莓 50g', '奇亚籽 10g']
        }
        // 可以添加更多早餐选项
    ],
    lunch: [
        {
            name: '鸡胸肉藜麦沙拉',
            calories: 450,
            protein: 30,
            carbs: 45,
            fat: 15,
            ingredients: ['鸡胸肉 100g', '藜麦 50g', '混合生菜 100g', '樱桃番茄 50g']
        },
        {
            name: '虾仁豆腐饭',
            calories: 420,
            protein: 25,
            carbs: 50,
            fat: 12,
            ingredients: ['虾仁 80g', '豆腐 100g', '糙米饭 150g', '西兰花 100g']
        }
        // 可以添加更多午餐选项
    ],
    dinner: [
        {
            name: '清蒸鲈鱼配糙米',
            calories: 380,
            protein: 25,
            carbs: 35,
            fat: 10,
            ingredients: ['鲈鱼片 120g', '糙米 50g', '西兰花 100g', '胡萝卜 50g']
        },
        {
            name: '菌菇豆腐汤面',
            calories: 350,
            protein: 20,
            carbs: 45,
            fat: 8,
            ingredients: ['全麦面条 100g', '豆腐 80g', '香菇 50g', '青菜 100g']
        }
        // 可以添加更多晚餐选项
    ]
};

// 随机生成食谱
function generateMealPlan() {
    const meals = ['breakfast', 'lunch', 'dinner'];
    
    meals.forEach(mealType => {
        const randomRecipe = recipes[mealType][Math.floor(Math.random() * recipes[mealType].length)];
        updateMealCard(mealType, randomRecipe);
    });
}

// 更新食谱卡片
function updateMealCard(mealType, recipe) {
    const card = document.getElementById(mealType);
    const calories = card.querySelector('.calories');
    const name = card.querySelector('h3');
    const nutrition = card.querySelector('.nutrition-info');
    const ingredients = card.querySelector('.ingredients');

    calories.textContent = `${recipe.calories}大卡`;
    name.textContent = recipe.name;
    nutrition.innerHTML = `
        <span>蛋白质: ${recipe.protein}g</span>
        <span>碳水: ${recipe.carbs}g</span>
        <span>脂肪: ${recipe.fat}g</span>
    `;
    ingredients.innerHTML = recipe.ingredients.map(item => `<li>${item}</li>`).join('');
}

// 绑定按钮点击事件
document.getElementById('generate-plan').addEventListener('click', generateMealPlan);

// 页面加载时生成一次食谱
generateMealPlan();