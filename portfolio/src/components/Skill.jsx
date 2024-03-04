import "../styling/skills.css";

// eslint-disable-next-line react/prop-types
export default function Skill({ img, alt }) {
  return (
    <img src={img} alt={alt} className="skill-img" />
    // <Card sx={{ maxWidth: 400 }}>
    //   <CardActionArea>
    //     <CardMedia component="img" height="300" image={img} alt={alt} />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {desc}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
}
