import Article from "./Article";
import NotFound from "./common/NotFound";

export const ARITCLE_ROUTES = [
    {
        path: ["/", "/articles"],
        component: Article
    },
    {
        path: "**",
        component: NotFound
    }
]