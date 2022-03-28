import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import ThreePIcon from '@mui/icons-material/ThreeP';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navigation = () => {
    const SocialLinks: any = {
        GitHub: 'https://github.com/EsotericZ',
        LinkedIn: 'https://www.linkedin.com/in/cj-sanders-5031a08b',
    };
    
    const actions = [
        { icon: <AccountCircleIcon />, name: 'About Me' },
        { icon: <WorkIcon />, name: 'Projects' },
        { icon: <ThreePIcon onClick={() => <a href='#contact'></a>} />, name: 'Contact' },
        { icon: <GitHubIcon onClick={() => handleClick('GitHub')} />, name: 'GitHub' },
        { icon: <LinkedInIcon onClick={() => handleClick('LinkedIn')} />, name: 'LinkedIn' },
    ];

    const handleClick = (network: string) => {
        window.open(SocialLinks[network], '_blank');
    };
    
    return (
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<HomeIcon />} />}
        >
            {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
            />
            ))}
        </SpeedDial>
    );
}

export default Navigation;