import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Grid,
} from "@material-ui/core";

export default function BasicForm(props) {

  let { data } = props;
  console.log(data)

  useEffect(() => {
    console.log('Use effect ...')
  }, []);

  const handleSubmit = event => {
    props.handleSubmit(event);
  };

  const handleChange = event => {
    props.handleChange(event)
  }

  return(
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={errors => null}
      >
        <Grid container spacing={1}>
          <Grid item lg={6}>
            <TextValidator
              className="w-full"
              label="Nume"
              variant="outlined"
              onChange={handleChange}
              type="text"
              name="name"
              value={data.name}
              validators={[
                "required",
                "minStringLength: 3",
                "maxStringLength: 254"
              ]}
              errorMessages={["Numele este necesar"]}
            />
          </Grid>

          <Grid item md={12}>
            <Button color="primary" variant="outlined" type="submit">
              <span className="pl-2 capitalize">Salveaza</span>
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
  )
}
