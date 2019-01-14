import main from "./components/main.vue";
import stocks from "./components/stocks.vue";

export const routes = [
	{path: '/', component: main},
	{path: '/portfolio', component: stocks},
	{path: '/stocks', component: stocks}
]