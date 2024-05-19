import { useState } from "react";
import { NewUser } from "../../../utils/interfaces";
import { postNewUser } from "../../../apiCalls/userApiCalls";
import {
  Box,
  Stack,
  InputLabel,
  OutlinedInput,
  FormControl,
  Button,
  Container,
  Typography,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../../utils/interfaces";

interface Props {
  allUsers: User[];
  setAllUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

function CreateAccount({ setAllUsers, allUsers }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleCreateAccount = () => {
    if (password === confirmPassword) {
      const newUser: NewUser = {
        data: {
          type: "user",
          attributes: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
          },
        },
      };

      postNewUser(newUser)
        .then((data) => {
          if (!data || data.errors) {
            console.log(data.errors[0].detail);
            setError(data.errors[0].detail);
          } else {
            navigate("/account/signin");
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
    else {
      setPasswordError(true);
    }
  };
  return (
    <Container maxWidth="xs">
      <Box component="form" sx={{ mt: 10}} onSubmit={handleCreateAccount}>
          {error && <Typography variant="h5" sx={{ color: "#ef8e64" }}>{error}</Typography>}
        <FormControl sx={{ mt: 5 }}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <OutlinedInput
            type="firstName"
            value={firstName}
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl sx={{ mt: 5 }}>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <OutlinedInput
            type="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FormControl>
        <Stack direction="column">
          <FormControl sx={{ mt: 5 }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl  error={passwordError} sx={{ mt: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
            
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText>{passwordError ? 'Passwords do not match' : 'Must be at least 6 characters long'}</FormHelperText>
          </FormControl>
          <FormControl error={passwordError} sx={{ mt: 5 }}>
            <InputLabel htmlFor="confirm_password">Confirm Password</InputLabel>
            <OutlinedInput
              
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
            {passwordError && <FormHelperText>Passwords do not match</FormHelperText>}
          </FormControl>
          <Button
            variant="contained"
            onClick={handleCreateAccount}
            sx={{ mt: 2 }}
          >
            Create Account
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>Already have an account?</Typography>
          <Button>
            <Link to="/account/signin">Click Here To Sign In</Link>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default CreateAccount;
