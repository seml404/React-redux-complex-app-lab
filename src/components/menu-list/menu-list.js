import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";

import WithRestoService from "../hoc";

import { menuLoaded, menuRequested, addedToCart } from "../../actions/";
import Spinner from "../spinner";
import "./menu-list.scss";

class MenuList extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.menuRequested();
    const { restoService } = this.props;
    restoService.getMenuItems().then((res) => this.props.menuLoaded(res));
    // restoService.getMenuItems().then((res) => {
    //   console.log(res);
    // });
  }
  render() {
    const { menuItems, loading, addedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="menu__list">
        {menuItems.map((menuItem) => {
          return (
            <MenuListItem
              key={menuItem.id}
              menuItem={menuItem}
              onAddToCart={() => addedToCart(menuItem.id)}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     menuLoaded: (newMenu) => {
//       dispatch({ type: "MENU_LOADED", payload: newMenu });
//     },
//   };

//   return {
//     menuLoaded: (newMenu) => dispatch(menuLoaded(newMenu)),
//   };
// };

const mapDispatchToProps = { menuLoaded, menuRequested, addedToCart };

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(MenuList)
);
