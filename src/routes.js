import main from "./components/main.vue";
import portfolio from "./components/portfolio.vue";
import stocks from "./components/stocks.vue";

export const routes = [
	{path: '/', component: main},
	{path: '/portfolio', component: portfolio},
	{path: '/stocks', component: stocks}
]