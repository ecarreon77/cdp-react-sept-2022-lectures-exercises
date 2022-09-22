import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const ProductsForm = ({ onAddProduct }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    quantityStock: "",
    imgUrl: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
      .validate(event.currentTarget.value);
    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[event.currentTarget.name];
      setErrors(errors);
    }
  };

  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    quantityStock: Joi.number().required(),
    imgUrl: Joi.string().uri().optional(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct(form);
    navigate("/");
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  return (
    <Grid
      container
      justifyContent="center"
      component="form"
      onSubmit={handleSubmit}
      marginTop="100px"
    >
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Add Product" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name}
                  onChange={handleChange}
                  value={form.name}
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  error={!!errors.description}
                  helperText={errors.description}
                  onChange={handleChange}
                  value={form.description}
                  label="Description"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  error={!!errors.price}
                  helperText={errors.price}
                  onChange={handleChange}
                  value={form.price}
                  label="Price"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="quantityStock"
                  error={!!errors.quantityStock}
                  helperText={errors.quantityStock}
                  onChange={handleChange}
                  value={form.quantityStock}
                  label="Quantity Stock"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="imgUrl"
                  error={!!errors.imgUrl}
                  helperText={errors.imgUrl}
                  onChange={handleChange}
                  value={form.imgUrl}
                  label="Image URL"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" disabled={isFormInvalid()} fullWidth>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductsForm;
