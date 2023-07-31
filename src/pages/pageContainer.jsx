import Grid from "@mui/material/Unstable_Grid2"
import PageContent from "./pageContent"

const PageContainer = ({children})=>{
    return (
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container>
                <PageContent />
            </Grid>
            
        </Grid>
    )
}
export default PageContainer