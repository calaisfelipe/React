/* eslint-disable react/prop-types */
import { Card, Typography, CardContent, CardActions } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Post({ post, user }) {
// if (user?.id === 2) throw new Error('Error #2')
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post?.title}
        
        </Typography>
        <Typography variant="body2">{post?.body}</Typography>
      </CardContent>

      <CardActions>
        <Typography variant="subtitle2">Author: {user?.name}</Typography>
        <Typography variant="subtitle2">Post ID:{post?.id}</Typography>
      </CardActions>
      <CardActions>
        <Typography variant="caption">
          Taglines: {user?.company.catchPhrase}
        </Typography>
      </CardActions>
    </Card>
  );
}
