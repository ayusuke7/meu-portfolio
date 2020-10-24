import React from "react";
import { Form } from "@unform/web";
import { InputField } from "../../components";

import { useStyles } from "./styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { ArrowBack, Email, Lock, AccountBox } from "@material-ui/icons";
import { Button } from "../../components";

export default function RegisterPage({ history }) {
  const classes = useStyles();

  const handleSubmit = (data) => {};

  const onNavigateBack = () => {
    history.goBack();
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
        <IconButton className={classes.icon} onClick={onNavigateBack}>
          <ArrowBack />
        </IconButton>
        <Typography>NOVO CADASTRO</Typography>

        <Form onSubmit={handleSubmit}>
          <InputField
            required
            iconLeft={<AccountBox />}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Nome"
          />
          <InputField
            required
            iconLeft={<AccountBox />}
            type="text"
            name="username"
            autoComplete="off"
            placeholder="Username"
          />
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
            autoComplete="new-password"
            placeholder="Senha"
          />
          <InputField
            required
            iconLeft={<Lock />}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Confirma Senha"
          />

          <br />
          <Button type="submit" label="CADASTRAR" />
        </Form>
      </Grid>
    </div>
  );
}
