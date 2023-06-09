import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WebsiteNavbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const togelDrawer = () => {
    setOpen((state) => (state === true ? false : true));
  };
  return (
    <AppBar
      color="default"
      position="fixed"
      elevation={4}
      sx={{
        overflow: "hidden",
        mb: 1,
        px: ["1.25rem", "2rem", "2.5rem", "3rem", "5rem", "7rem", "138px"],
        justifyContent: "center",
        height: [70, 80],
        bgColor: "#FFFFFF",
      }}
      style={{
        backgroundColor: "white",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: 50,
          px: [0, 0, 0, 0, 0, 0, 0],
          mx: 0,
        }}
      >
        {/* logo */}
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
          className="h-6 xl:h-7 cursor-pointer"
          onClick={() => {
            navigate("/home");
          }}
        />

        {/* links */}
        <Stack
          direction="row"
          sx={{
            display: ["none", "none", "none", "flex"],
            width: "100%",
            justifyContent: "center",
            gap: [1, 1, 1, 2, 6, 10],
          }}
        >
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/services");
            }}
          >
            <Typography
              variant="body24"
              sx={{
                color: "#000000",
              }}
            >
              Pricing
            </Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/ourservices");
            }}
          >
            <Typography
              variant="body24"
              sx={{
                color: "#000000",
              }}
            >
              Services
            </Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            <Typography
              variant="body24"
              sx={{
                color: "#000000",
              }}
            >
              Business
            </Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/blogs");
            }}
          >
            <Typography
              variant="body24"
              sx={{
                color: "#000000",
              }}
            >
              Blog
            </Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/faqs");
            }}
          >
            <Typography
              variant="body24"
              sx={{
                color: "#000000",
              }}
            >
              FAQs
            </Typography>
          </a>
          <div
            className=" border-2 rounded-full animate-pulse duration-0 p-1 cursor-pointer z-50 top-24 text-xl"
            onClick={() => {
              navigate("/devs");
            }}
          >
            <FiSettings />
          </div>

          {/* temp for devs */}
        </Stack>
        {/* actions */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: ["none", "none", "none", "flex"],
          }}
          alignItems="center"
        >
          <Button
            variant="outlined"
            szie="small"
            className="w-32"
            onClick={(e) => {
              navigate("/login");
            }}
            sx={{
              width: 130,
              height: 45,
              fontSize: theme.typography.body22,
              borderRadius: ["6px", "6px", "6px", "8px"],
              color: "black",
              borderColor: "black",
            }}
          >
            Login
          </Button>
          <Button
            szie="small"
            variant="contained"
            onClick={(e) => {
              navigate("/dashboard/ordernow/address");
            }}
            sx={{
              width: 140,
              height: 45,
              fontSize: theme.typography.body22,
              borderRadius: ["6px", "6px", "6px", "8px"],
              color: "white",
            }}
            style={{
              backgroundColor: "#022A30",
            }}
          >
            Book Now
          </Button>
        </Stack>
        <Stack
          onClick={togelDrawer}
          sx={{
            display: ["flex", "flex", "flex", "none"],
          }}
        >
          <label htmlFor="hameburger" className="cursor-pointer">
            <BiMenu size={30} />
          </label>
        </Stack>
        <Drawer
          anchor="right"
          open={open}
          sx={{
            display: ["block", "block", "bock", "none"],
            ".MuiDrawer-paper": {
              width: ["80%", "60%"],
            },
          }}
          onClose={togelDrawer}
        >
          <Toolbar
            sx={{
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              height: "100%",
              paddingY: 7,
              gap: 4,
              position: "relative",
            }}
          >
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
              alt=""
              className="absolute brightness-[.8] top-0 left-0 z-[-1]"
            />
            <img
              src={import.meta.env.VITE_BASE_URL + "/images/signup-leaf.svg"}
              alt=""
              className="absolute brightness-[.8] bottom-0 right-0 rotate-180  z-[-1]"
            />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
                togelDrawer();
              }}
            >
              <Typography variant="body32">Pricing</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/ourservices");
                togelDrawer();
              }}
            >
              <Typography variant="body32">Services</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
                togelDrawer();
              }}
            >
              <Typography variant="body32">Business</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/blogs");
                togelDrawer();
              }}
            >
              <Typography variant="body32">Blogs</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/faqs");
                togelDrawer();
              }}
            >
              <Typography variant="body32">FAQs</Typography>
            </a>
            <div
              className="border-2 rounded-full animate-pulse duration-0 p-1 cursor-pointer z-50 top-24 text-xl"
              onClick={() => {
                navigate("/devs");
                togelDrawer();
              }}
            >
              <FiSettings size={"1.5rem"} />
            </div>

            <div className="flex gap-6 flex-wrap justify-center items-center md:gap-6 ">
              <Button
                variant="outlined"
                color="inherit"
                className="w-32"
                onClick={(e) => {
                  navigate("/login");
                  togelDrawer();
                }}
                sx={{
                  width: 130,
                  height: 45,
                  fontSize: theme.typography.body22,
                  borderRadius: ["6px", "6px", "6px", "8px"],
                  color: "black",
                  borderColor: "black",
                }}
                size="small"
              >
                Login
              </Button>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={(e) => {
                  navigate("/dashboard/ordernow/address");
                  togelDrawer();
                }}
                sx={{
                  width: 140,
                  height: 45,
                  fontSize: theme.typography.body22,
                  borderRadius: ["6px", "6px", "6px", "8px"],
                  color: "white",
                }}
                style={{
                  backgroundColor: "#022A30",
                }}
              >
                Book Now
              </Button>
            </div>
          </Toolbar>
        </Drawer>
        {/*  */}
      </Toolbar>
    </AppBar>
  );
};

export default WebsiteNavbar;
