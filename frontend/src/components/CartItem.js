import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const Container = styled.div`
  padding: 1rem;
  margin: 8px;

  @media (max-width: 960px) {
    margin: 0;
  }
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background-color: white;
  border-radius: 2px;
  place-items: center;
  > a {
    text-decoration: none;
    font-weight: bold;
    color: black;
    @media (max-width: 700px) {
      font-size: 0.8rem;
    }
    @media (max-width: 500px) {
      font-size: 0.6rem;
    }
    &:hover {
      color: #dd219e;
    }
  }
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 150%;

  @media (max-width: 700px) {
    width: 150%;
  }
  @media (max-width: 500px) {
    width: 180%;
  }
`;

const ItemName = styled.p``;

const ItemPrice = styled.p`
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const Select = styled.select`
  padding: 10px 16px;
  @media (max-width: 700px) {
    padding: 8px 13px;
  }
  @media (max-width: 500px) {
    padding: 6px 11px;
  }
`;

const Option = styled.option`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  font-size: 1.3rem;
  padding: 5px 5px;
  color: crimson;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const CartItem = ({ item, quantityChangeHandler, removeHandler }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={item.imageUrl} alt={item.name}></Image>
      </ImageWrapper>

      <Link to={`/products/${item.product}`}>
        <ItemName>{item.name}</ItemName>
      </Link>
      <ItemPrice>${item.price}</ItemPrice>
      <Select value={item.quantity} onChange={(e) => quantityChangeHandler(item.product, e.target.value)}>
        {[...Array(item.countInStock).keys()].map((x) => (
          <Option key={x + 1} value={x + 1}>
            {x + 1}
          </Option>
        ))}
      </Select>
      <Button onClick={()=> removeHandler(item.product)}>
        <BsTrash></BsTrash>
      </Button>
    </Container>
  );
};

export default CartItem;