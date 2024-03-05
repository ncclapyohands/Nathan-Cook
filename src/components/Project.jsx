import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../styling/project.css";

// eslint-disable-next-line react/prop-types
export default function Project({ img, alt, title, desc, link }) {
  return (
    <div className="project-card" data-aos="flip-down">
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <Button
        href={link}
        variant="contained"
        className="project-button"
        startIcon={<GitHubIcon />}
      >
        Github
      </Button>
    </div>
    // <Card sx={{ maxWidth: 300 }}>
    //   <CardMedia component="img" height="300" image={img} alt={alt} />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {desc}
    //     </Typography>
    //   </CardContent>
    //
    // </Card>
  );
}
