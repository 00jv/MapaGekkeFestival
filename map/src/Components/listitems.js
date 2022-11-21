import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
export default function MainListItems({nameEvent}) {
  return (
    <React.Fragment >
      <ListItemButton
        sx={{
          background: "linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
          marginTop: '1rem',
          marginBottom: '1rem',
          borderRadius: 2
        }}
        onClick={() => nameEvent("Campeonato")}
      >
        <ListItemIcon>
          <SmartToyIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Campeonatos" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton
        sx={{
        background: "linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)",
         marginTop: '1rem', 
         marginBottom: '1rem', 
         borderRadius: 2 
         }}
         onClick={() => nameEvent("Eventos")}
         >
        <ListItemIcon>
          <EmojiEventsIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Eventos" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton 
      sx={{ 
        background: "linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)", 
        marginTop: '1rem', 
        marginBottom: '1rem', 
        borderRadius: 2 
        }}
        onClick={() => nameEvent("Lojas")}
        >
        <ListItemIcon>
          <StoreMallDirectoryIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Lojas" sx={{ color: 'white' }} />
      </ListItemButton>
      <ListItemButton 
      sx={{ 
        background: "linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)", 
        marginTop: '1rem', 
        marginBottom: '1rem', 
        borderRadius: 2 
        }}
        onClick={() => nameEvent("Just Dance")}
        >
        <ListItemIcon>
          <NightlifeIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Just Dance" sx={{ color: 'white' }} />
      </ListItemButton >
      <ListItemButton 
      sx={{ 
        background: "linear-gradient(101.05deg, #1F8EBE -5.36%, #440495 29.46%, #440495 56.03%, #B102CD 81.92%)", 
      marginTop: '1rem', 
      marginBottom: '1rem', 
      borderRadius: 2 
      }}
      onClick={() => nameEvent("Karaokê")}
      >
        <ListItemIcon>
          <GraphicEqIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Karaokê" sx={{ color: 'white' }} />
      </ListItemButton>
    </React.Fragment>
  )
}