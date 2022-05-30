import React from "react";
import { Container, Button, Typography, Box, Grid } from "@mui/material";
import productOne from "../images/product1.gif";
import productTwo from "../images/product2.gif";
import ReactJson from "react-json-view";
import { useDispatch, useSelector } from "react-redux";
import WrapperBox from "../components/WrapperBox";
import { addToCart, removeCart } from "../service/cart/slice.js";

const RootComponent = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        RootComponent {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item sm={6} xs={12}>
          <ProductPage />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CartPage />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductPage = (props) => {
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Product Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6} xs={12}>
          <ProductOne />
        </Grid>
        <Grid item md={6} xs={12}>
          <ProductTwo />
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartPage = (props) => {
  // Step 6
  // Replace the line below to get data of the second product from state.cart.totalPrice
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Cart Page {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container spacing={2} p="1rem">
        <Grid item md={6} xs={12}>
          <CartProductOne />
        </Grid>
        <Grid item md={6} xs={12}>
          <CartProductTwo />
        </Grid>
        <Grid item xs={12}>
          <Typography p="0.5rem" variant="h5">
            Total Price: 💵 {totalPrice}
          </Typography>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductOne = (props) => {
  // Step 4
  // Replace the line below to get data of the first product from state.product
  // You should see the price is updated
  const productInStore = useSelector((state) => state.product[0]);
  const product = {
    id: productInStore.id,
    title: productInStore.title,
    price: productInStore.price,
    // qty: productInStore.qty,
  };

  // Step 7
  // Define: const dispatch = useDispatch();
  // Create a function to handle click event of the button Add
  // In the function, dispatch cartActions.addProduct(product) to trigger the action add product to the cart
  // Make the function handle onClick event of the button
  // eslint-disable-next-line
  const dispatch = useDispatch();

  // Step 8
  // Create a function to handle click event of the button Remove
  // In the function, dispatch cartActions.removeProduct(product) to trigger the action remove product from the cart
  // Make the function handle onClick event of the button

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productOne} alt="Product One" width="100%" />
          <Typography p="0.5rem" variant="h6" sx={{ color: "success.main" }}>
            💵 {product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              onClick={() => dispatch(addToCart(product))}
              variant="success"
              sx={{ width: "5rem" }}
            >
              Add
            </Button>
            <Button
              onClick={() => dispatch(removeCart(product))}
              variant="error"
              sx={{ width: "5rem" }}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const ProductTwo = (props) => {
  // Step 5
  // Replace the line below to get data of the second product from state.product
  // You should see the price is updated
  const productInStore = useSelector((state) => state.product[1]);
  const product = {
    id: productInStore.id,
    title: productInStore.title,
    price: productInStore.price,
    // qty: productInStore.qty,
  };

  // Step 9
  // Repeat step 7 and 8 for this component
  const dispatch = useDispatch();
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        {product.title} {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <img src={productTwo} alt="Product Two" width="100%" />
          <Typography p="0.5rem" variant="h5" sx={{ color: "success.main" }}>
            💵 {product.price}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              onClick={() => dispatch(addToCart(product))}
              variant="success"
              sx={{ width: "5rem" }}
            >
              Add
            </Button>
            <Button
              onClick={() => dispatch(removeCart(product))}
              variant="error"
              sx={{ width: "5rem" }}
            >
              Remove
            </Button>
          </div>
        </Grid>
      </Grid>
    </WrapperBox>
  );
};

const CartProductOne = (props) => {
  // Step 2
  // Replace the line below to get data of the first product from state.cart.products
  // Change the price of products in `cart.reducer.js` to see the effect
  const productsInCart = useSelector((state) => state.cart.products);
  const product = {
    price: productsInCart[0].price,
    qty: productsInCart[0].qty,
  };

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 1 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Container fluid="true">
        <Box>
          <Typography p="0.5rem" variant="h6">
            Quantity: {product.qty}
          </Typography>
          <Typography p="0.5rem" variant="h6">
            Price: 💵 {product.price}
          </Typography>
        </Box>
      </Container>
    </WrapperBox>
  );
};

const CartProductTwo = (props) => {
  // Step 3
  // Replace the line below to get data of the second product from state.cart.products
  // Change the price of products in `cart.reducer.js` to see the effect
  const productsInCart = useSelector((state) => state.cart.products);
  const product = {
    price: productsInCart[1].price,
    qty: productsInCart[1].qty,
  };
  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        CartProduct 2 {`({`}
        <Box component="span" sx={{ color: "warning.main" }}>
          {Object.keys(props).join(", ")}
        </Box>
        {`})`}
      </Typography>
      <Box>
        <Typography p="0.5rem" variant="h6">
          Quantity: {product.qty}
        </Typography>
        <Typography p="0.5rem" variant="h6">
          Price: 💵 {product.price}
        </Typography>
      </Box>
    </WrapperBox>
  );
};

const Store = (props) => {
  // Step 1
  // use useSelector() to get the data of products and cart in the store
  // pass {products, cart} to the src attribute of the component <ReactJson/>
  const { cart, product } = useSelector((state) => state);

  return (
    <WrapperBox>
      <Typography
        p="0.5rem"
        variant="h5"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Store
      </Typography>
      <Box sx={{ textAlign: "start" }}>
        <ReactJson
          name="store"
          src={{ cart, product }}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </Box>
    </WrapperBox>
  );
};

const ReduxExercise = () => {
  return (
    <Container maxWidth="xxl">
      <br />
      <h5>How to add products to the cart using Redux?</h5>
      <br />
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Store />
        </Grid>
        <Grid item md={9} xs={12}>
          <RootComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReduxExercise;
