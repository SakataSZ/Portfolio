import { CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import * as Icon from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import EyeChatch from "../templates/EyeChatch";
import template from "./particles.json";
import { styled } from "@mui/system";
import "../../css/Home.css"

const github_url = 'https://github.com/SakataSZ'

const Root = styled('div')(({ theme }) => ({
  color: 'white',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

const cards = [
  {
    title: "React",
    icon: <Icon.FaReact size="12rem" color="#61dbfb" />,
    text: "このWEBページはReactを使用して作成されています. 各コンポーネントは再利用することができます.",
  },
  {
    title: "Material UI",
    icon: <SiMaterialui size="12rem" color="#007fff" />,
    text: "UI & UXのためにMaterial UIを使用しました. MUIを使用することで高速にデザインを設計することができます.",
  },
  {
    title: "Github Pages",
    icon: <Icon.FaGithub size="12rem" color="#211f1f" />,
    text: "Github Pagesは静的サイトのホスティングサービスです. 無料でWEBサイトを公開できます.",
  },
];

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <>
      <EyeChatch>
        <Particles
          id="tsparticles"
          options={template}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        
        <Grid container className='header-content'>
            <Grid item xs={12} md={5}>
              <Box sx={{ marginX: 5 }} >
                <Root>
                  <Typography
                    variant='h3'
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      lineHeight: '5rem'
                    }}
                  >
                    Welcom to
                  </Typography>
                  <Typography
                    color='primary'
                    variant='h3'
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      lineHeight: '5rem'
                    }}>SakataSZ
                  </Typography>
                  <Typography
                    variant='h3'
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      lineHeight: '5rem'
                    }}
                  >Portforio!
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      pt: 5,
                      fontFamily: 'Roboto',
                      fontWeight: 500,
                      letterSpacing: '.3rem',
                    }}
                  >
                    サーバー構築/Web開発/IoT/機械学習/etc..<br />
                    様々なIT技術に取り組んでいます
                  </Typography>
                  <Box marginTop={5}>
                    <Button variant='contained' href={github_url}>View Github</Button>
                  </Box>
                </Root>
              </Box>
            </Grid>
            <Grid item xs={0} md={7}>
            </Grid>
          </Grid>

      </EyeChatch>

      <div style={{ backgroundColor: "#ffffff" }}>
        <Box paddingX={5} paddingY={10}>
          <Box marginBottom={10}>
            <Typography variant="h4" textAlign={"center"} color="#212b36">
              About this page
            </Typography>
          </Box>
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item xs={12} md={4} key={card.text}>
                <Card elevation={10} sx={{ borderRadius: "16px", height: 550 }}>
                  <CardContent>
                    <Box marginX={3} marginY={3}>
                      <Box pb={4} display="flex" justifyContent="center">
                        {card.icon}
                      </Box>
                      <Typography
                        variant="h4"
                        textAlign="center"
                        paddingBottom={5}
                      >
                        {card.title}
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        {card.text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Home;
