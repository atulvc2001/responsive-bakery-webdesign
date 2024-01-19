import BREAD_4 from "./images/bread-4.png";
import BREAD_1 from "./images/bread-1.png";
import HOME_BG from "./images/home-bg.jpg";
import HOME_BREAD from "./images/home-bread.png";
import NEW_BREAD_1 from "./images/new-bread-1.png";
import NEW_BREAD_2 from "./images/new-bread-2.png";
import NEW_BREAD_3 from "./images/new-bread-3.png";
import ABOUT_BREAD from "./images/about-bread.png";
import BREAD_2 from "./images/bread-2.png";
import BREAD_3 from "./images/bread-3.png";
import FAVICON from "./images/favicon.png";
import FAVORITE_BREAD_1 from "./images/favorite-bread-1.png";
import FAVORITE_BREAD_2 from "./images/favorite-bread-2.png";
import FAVORITE_BREAD_3 from "./images/favorite-bread-3.png";
import FAVORITE_BREAD_4 from "./images/favorite-bread-4.png";
import FAVORITE_BREAD_5 from "./images/favorite-bread-5.png";
import FAVORITE_BREAD_6 from "./images/favorite-bread-6.png";
import VISIT_BG from "./images/visit-bg.jpg";

export const initialState = {
  imgList: {
    BREAD_4,
    BREAD_1,
    HOME_BG,
    HOME_BREAD,
    NEW_BREAD_1,
    NEW_BREAD_2,
    NEW_BREAD_3,
    ABOUT_BREAD,
    BREAD_2,
    BREAD_3,
    FAVICON,
    FAVORITE_BREAD_1,
    FAVORITE_BREAD_2,
    FAVORITE_BREAD_3,
    FAVORITE_BREAD_4,
    FAVORITE_BREAD_5,
    FAVORITE_BREAD_6,
    VISIT_BG,
  },
};


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}