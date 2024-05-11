import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Article, mockArticles } from "../../../utils/utils";

function ArticleCard() {
const navigate = useNavigate();
//Will need to refactor to set targetArticle so that it's props can be passed to Article.tsx

  return (
    <div className="article-card">
      <Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={5}
          columns={3}
        >
          {mockArticles.map((article: Article) => {
            return (
              <Grid item>
                {/* <CardActions> */}
                  {/* <Link to={`/education/${article.title}/${article.tagline}`}> */}
                    {/* Change article.title to article.category -- change article.tagline to titile */}
                <Card
                  sx={{
                    height: 400,
                    maxWidth: 345,
                    boxShadow: "none",
                    overflowY: "auto",
                    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                    "&:hover": {
                      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                      transform: "scale(1.01)",
                    },
                  }}
                  onClick={() => navigate(`/education/${article.title}/${article.tagline}`)} //Change to route internally to article page
                >
                  <CardContent>
                    <Typography textAlign="left" variant="h2">
                      {article.title}
                    </Typography>
                    {article.paragraphs.map((paragraph: string) => {
                        return (
                            <Typography
                                textAlign="left"
                                variant="body1"
                                color="text.secondary"
                                sx={{ mt: 5}}
                            >
                                {paragraph}
                            </Typography>
                        )
                    })}
                  </CardContent>
                </Card>
                {/* </Link> */}
                  {/* </CardActions> */}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default ArticleCard;