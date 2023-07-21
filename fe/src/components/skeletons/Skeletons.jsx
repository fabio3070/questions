import { Skeleton } from "@mui/material";

export default function Skeletons() {
    
    return(
        <div style={{marginTop: "2rem"}}>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
            <Skeleton variant="rounded" width={900} height={150} animation="wave" sx={{ mb: 5  }}/>
        </div>
    );
}