import React from "react";
import "./cart-table.scss";
import { connect } from "react-redux";
import WithRestoService from "../hoc";
import { deleteFromCart } from "../../actions";
const CartTable = ({ items, deleteFromCart }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id } = item;
          return (
            <div className="cart__item" key={id}>
              <img src={url} className="cart__item-img" alt="Cesar salad"></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__close" onClick={() => deleteFromCart(id)}>
                {" "}
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items,
    //   loading: state.loading,
  };
};

const mapDispatchToProps = { deleteFromCart };

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(CartTable)
);
