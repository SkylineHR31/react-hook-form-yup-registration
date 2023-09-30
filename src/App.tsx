import { Box } from "@mui/material";
import RegistrationForm from "./components/Registration/Registration";

const App: React.FC = (): JSX.Element => {
  return (
    <Box component="main" sx={{
      fontFamily: "sans-serif" // костыль, чтобы не играться с темой и не тратить время
    }}>
      <RegistrationForm />
    </Box>
  );
};

export default App;
