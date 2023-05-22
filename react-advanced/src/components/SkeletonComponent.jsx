import {Skeleton, Card, CardContent} from '@mui/material';


function SkeletonComponent() {
  return ( 
    <Card sx={{ width: 500 }}>
      <CardContent>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      </CardContent>
    </Card>
  )
}

export default SkeletonComponent