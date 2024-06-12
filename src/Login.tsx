import { useContext, useState } from "react";
import "./Login.css";
import { IAppProviderValues, ILoginFormFields } from "./interfaces";
import { AppContext } from "./context/AppContext";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";

const Login = () => {
  const [formInput, setFormInput] = useState<ILoginFormFields>({
    phone: "",
    password: "",
  });
  const [showPassword, setShowpassword] = useState(false);
  const navigate = useNavigate();
  const appContext: IAppProviderValues = useContext(AppContext);
  return (
    <Grid container rowSpacing={1} paddingRight={1} paddingLeft={1}>
      <Grid
        item
        md={12}
        xs={12}
      >
        <TextField fullWidth label="Phone"></TextField>
      </Grid>
      <Grid item md={12} xs={12}>
        <TextField fullWidth label="Password"></TextField>
      </Grid>
      <Grid item md={12} xs={12}>
        <Button fullWidth variant="contained" color="error">
          login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
