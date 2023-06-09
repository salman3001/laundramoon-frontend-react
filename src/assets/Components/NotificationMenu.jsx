import { useTheme } from "@emotion/react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { format } from "date-fns";
import RouterLink from "./RouterLink";

const NotificationMenu = (prop) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //fetch data here
  const demoData = [
    { id: 1, odername: "My Order", status: "delivered", date: Date.now() },
    { id: 2, odername: "My Order", status: "delivered", date: Date.now() },
    { id: 3, odername: "My Order", status: "delivered", date: Date.now() },
  ];

  return (
    <div>
      <IconButton
        sx={{ border: 1, borderColor: "rgba(0, 0, 0, 0.2)" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoIosNotificationsOutline
          style={{
            color: theme.palette.primary.main,
          }}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          top: ["2rem", "10px"],
          "&>.MuiMenuItem-root": {
            width: "100%",
          },
          "& .MuiPaper-root": {
            minWidth: ["90vw", "auto"],
          },
        }}
      >
        {demoData.map((data) => (
          <MenuItem onClick={handleClose} key={data.id}>
            <Notificationcard
              orderName={data.odername}
              status={data.status}
              date={format(data.date, "dd mm yyyy hh:mm")}
            />
          </MenuItem>
        ))}
        <MenuItem sx={{ justifyContent: "end" }}>
          <RouterLink size="1.5rem" to="/dashboard//myorders">
            See all
          </RouterLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NotificationMenu;

const Notificationcard = (prop) => {
  return (
    <Box
      sx={{
        minWidth: 194,
        width: "100%",
        minHeight: 67,
        bgcolor: "#DDF1F4",
        borderRadius: 2,
        padding: 1,
      }}
    >
      <Typography variant="subtitle24" fontWeight={600} color="text.secondary">
        {prop.orderName}
      </Typography>
      <Typography variant="body22" color="text.blue">
        {prop.status}
      </Typography>
      <Typography variant="body22" color="text.muted">
        {prop.date}
      </Typography>
    </Box>
  );
};
