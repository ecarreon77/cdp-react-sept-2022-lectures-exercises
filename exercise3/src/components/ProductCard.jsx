import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";

const ProductItemCard = ({
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
                    component="img"
                    height="400"
                    image={prod.imageUrl}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" fontWeight="bold">
                      {prod.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" fontWeight="bold">
                      ₱{prod.price}
                    </Typography>

                    <Typography variant="body2">{prod.description}</Typography>
                  </CardContent>
                  <CardActions>
                    {prod.qty > 0 ? (
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                        direction="row"
                        fullWidth
                        textlign="center"
                      >
                        <Button onClick={() => onDecrementQty(prod.id)}>
                          -
                        </Button>
                        <TextField
                          sx={{
                            "& .MuiInputBase-root": {
                              height: 43,
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
                        fullWidth
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

export default ProductItemCard;
