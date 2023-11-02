import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

import { SideBlock } from "./SideBlock";

export const TagsBlock = ({ items, isLoading = true }) => {
  return (

    <List sx={{ display: 'flex' }}>
      {(isLoading ? [...Array(5)] : items).map((name, i) => (
        <li key={i}>
          {isLoading ? (
            <Skeleton sx={{mr:1}} width={100} />
          ) :
            <a
              style={{ 
                textDecoration: "none", 
                background: '#EEECEB', 
                marginRight: '8px', 
                color: "black", 
                fontSize:'16px',
                borderRadius: '20px', 
                padding: '4px 12px' }}
              href={`/tags/${name ? name : 'Другие'}`}>
              {name ? name : 'Другие'}
            </a>
          }
        </li>
      ))}
    </List>

  );
};
