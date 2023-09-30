import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StepWrapper = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3)
}));

export const StepTitle = styled(Box<"label">)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: theme.spacing(2),
    display: "inline-block"
}));