const initialState = {
  menu: [
    // {
    //   title: "Pizza Napoletana",
    //   price: 13,
    //   url: "https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/decalogo_avpn_1.jpg",
    //   category: "pizza",
    //   id: 3,
    // },
  ],
  loading: true,
  items: [],
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      console.log("item added");
      const item = state.menu.find((item) => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case "ITEM_REMOVED_FROM_CART":
      const idx = action.payload;
      console.log(`it's idx`);
      const itemIndex = state.items.findIndex((el) => el.id === idx);
      console.log(itemIndex);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
