import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const FormWrapper = styled(Box)(({ theme }) => ({
    maxWidth: "600px",
    margin: "0 auto",
    padding: theme.spacing(4),
}));
