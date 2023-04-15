import { AppBar, Button, Drawer, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WebsiteNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const togelDrawer = () => {
    setOpen((state) => (state === true ? false : true));
  };
  return (
    <AppBar
      color="default"
      position="static"
      elevation={7}
      sx={{
        overflow: "hidden",
        paddingX: [1, 2, 2, 2, 2, 8],
        paddingY: 2,
        mb: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* logo */}
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/Launder-logo.svg"}
          className="h-4 md:h-8 cursor-pointer"
          onClick={() => {
            navigate("/home");
          }}
        />
        {/* links */}
        <div className="hidden lg:flex items-center text-xl gap-6 justify-between">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            <Typography variant="h6">Pricing</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/services");
            }}
          >
            <Typography variant="h6">Services</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            <Typography variant="h6">Business</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/blogs");
            }}
          >
            <Typography variant="h6">Blog</Typography>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/faqs");
            }}
          >
            <Typography variant="h6">Faqs</Typography>
          </a>
        </div>
        {/* actions */}
        <div className="hidden lg:flex gap-2 md:gap-6">
          <Button
            variant="outlined"
            color="inherit"
            className="w-32"
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              navigate("/dashboard/ordernow/address");
            }}
          >
            Book Now
          </Button>
        </div>
        <div className="block lg:hidden " onClick={togelDrawer}>
          <label htmlFor="hameburger" className="cursor-pointer">
            <img
              src={
                import.meta.env.VITE_BASE_URL +
                "/images/hamburger-menu-icon.svg"
              }
              className="h-6"
              alt=""
            />
          </label>
        </div>
        <Drawer
          anchor="right"
          open={open}
          sx={{
            display: ["block", "block", "bock", "none"],
            ".MuiDrawer-paper": {
              width: ["90%", "70%"],
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
            }}
          >
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
              }}
            >
              <Typography variant="h6">Pricing</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/services");
              }}
            >
              <Typography variant="h6">Services</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
              }}
            >
              <Typography variant="h6">Business</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/blogs");
              }}
            >
              <Typography variant="h6">Pricing</Typography>
            </a>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate("/faqs");
              }}
            >
              <Typography variant="h6">Faqs</Typography>
            </a>
            <div className="flex gap-2 md:gap-6 ">
              <Button
                variant="outlined"
                color="inherit"
                className="w-32"
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  navigate("/dashboard/ordernow/address");
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