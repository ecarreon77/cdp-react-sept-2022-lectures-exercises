import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  Button,
  CardContent,
  Typography,
  ButtonGroup,
  TextField,
} from "@mui/material";

const ProductList = ({
  products,
  onAddToCart,
  onIncrementQty,
  onDecrementQty,
}) => {
  return (
    <>
      <CssBaseline>
        <div>
          <Grid
            container
            spacing={5}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            marginTop={10}
            marginBottom={10}
          >
            {products.map((prod) => (
              <Grid item md={4} key={prod.id} marginTop={1}>
                <Card>
                  <CardMedia
                    style={{
                      height: "450px",
                      marginLeft: "20px",
                      marginTop: "10px",
                      width: "300px",
                    }}
                    component="img"
                    image={prod.imageUrl}
                    alt="Image"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" fontWeight="bold">
                      {prod.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" fontWeight="bold">
                      ₱.{prod.price}
                    </Typography>
                    <Typography variant="body2">{prod.description}</Typography>
                  </CardContent>
                  <CardActions>
                    {prod.qty > 0 ? (
                      <ButtonGroup variant="contained">
                        <Button onClick={() => onDecrementQty(prod.id)}>
                          -
                        </Button>
                        <TextField
                          sx={{
                            width: { sm: 50, md: 60 },
                            "& .MuiInputBase-root": {
                              height: 42,
                            },
                          }}
                          value={prod.qty}
                        />
                        <Button onClick={() => onIncrementQty(prod.id)}>
                          +
                        </Button>
                      </ButtonGroup>
                    ) : (
                      <Button
                        onClick={() => onAddToCart(prod.id)}
                        variant="contained"
                        size="large"
                      >
                        Add To Cart
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </CssBaseline>
    </>
  );
};

export default ProductList;
