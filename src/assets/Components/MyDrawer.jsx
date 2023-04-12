import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LaundraLogo from "./LaundraLogo";
import ProfileAvatar from "./ProfileAvatar";
import SideMenuOption from "./SideMenuOption";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { HiOutlineClipboard } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { TfiMedallAlt } from "react-icons/tfi";

const MyDrawer = (prop) => {
  const theme = useTheme();
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Box
      sx={{
        position: ["fixed", "fixed", "static"],
        width: [
          `${prop.open ? "100%" : "0px"}`,
          `${prop.open ? "100%" : "0px"}`,
          "295px",
        ],
        minHeight: "100vh",
        background: "rgba(0, 0, 0, 0.5);",

        overflow: "hidden",
        zIndex: 1,
      }}
      onClick={prop.drawerHandler}
    >
      <Paper
        sx={{
          width: [
            `${prop.open ? "295px" : "0px"}`,
            `${prop.open ? "295px" : "0px"}`,
            "295px",
          ],
          height: "100vh",
          minHeight: "100vh",
          backgroundColor: "secondary.main",
          zIndex: 2,
          color: "black",
          borderRadius: 0,
          transition: "width .2s ease-in-out ",
          paddingx: 3,
          paddingBottom: 3,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Stack
          gap={4}
          justifyContent="space-between"
          sx={{
            flexGrow: 1,
            height: "100%",
          }}
        >
          <Stack justifyContent="center" alignItems="center" gap={2}>
            <Box
              sx={{
                height: "84px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
                gap: 4,
              }}
            >
              <LaundraLogo />
              <Divider
                orientation="horizontal"
                flexItem
                light
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.06)",
                }}
              />
            </Box>
            <ProfileAvatar
              src={import.meta.env.VITE_BASE_URL + "/images/Avatar.png"}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.light",
                fontWeight: 600,
              }}
            >
              Jackson Howell{" "}
            </Typography>
          </Stack>
          <Stack
            gap={2}
            sx={{
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <SideMenuOption
              selected={location.pathname === "/myorders"}
              navigateto="/myorders"
              title="My Orders"
              Icon={
                <HiOutlineClipboard
                  color={
                    location.pathname === "/myorders" ? "#00a5bf" : "white"
                  }
                  size={25}
                />
              }
            />
            <SideMenuOption
              selected={location.pathname === "/promotions"}
              navigateto="/promotions"
              title="Promotions"
              Icon={
                <TfiMedallAlt
                  color={
                    location.pathname === "/promotions" ? "#00a5bf" : "white"
                  }
                  size={25}
                />
              }
            />
            <SideMenuOption
              selected={location.pathname === "/myaccount"}
              navigateto="/myaccount"
              title="My Account"
              Icon={
                <BiUser
                  color={
                    location.pathname === "/myaccount" ? "#00a5bf" : "white"
                  }
                  size={25}
                />
              }
            />
          </Stack>
          <Stack
            sx={{
              "& hr": {
                borderColor: " rgba(255, 255, 255, 0.06)",
              },
            }}
          >
            <Divider />
            <Box
              component={"a"}
              sx={{
                mt: 2,
                color: "text.light",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                gap: 2,
                "&>h6": {
                  fontWeight: 800,
                },
              }}
            >
              <AiOutlinePoweroff
                size={40}
                style={{
                  background: theme.palette.primary.main,
                  padding: theme.spacing(1),
                  borderRadius: "100%",
                }}
              />
              <Typography variant="subtitle1">Logout</Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default MyDrawer;
