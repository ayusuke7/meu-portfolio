import React from "react";
import { Form } from "@unform/web";
import { InputField, Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/ducks/user";
import { useStyles } from "./styles";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { Email, Lock } from "@material-ui/icons";

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const handleSubmit = (data) => {
    console.log(data);
    dispatch(actions.requestLogin(data));
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.form}
      >
        <Typography>MEU PORTFÓLIO</Typography>
        <Form onSubmit={handleSubmit}>
          <InputField
            required
            iconLeft={<Email />}
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Email"
            spellCheck="false"
          />

          <InputField
            required
            iconLeft={<Lock />}
            type="password"
            name="password"
            placeholder="password"
            autoComplete="new-password"
          />

          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button type="submit" label="ENTRAR" />
          )}
          <br />
          <br />
          <span>
            Não tem uma conta? <a href="/register">Registre-se</a>
          </span>
        </Form>
      </Grid>
    </div>
  );
}
