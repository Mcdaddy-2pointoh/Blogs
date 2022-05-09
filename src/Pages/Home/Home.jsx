import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  Modal,
  Button,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../Components/Copyright/Copyright";
import { muiThemeConst } from "../../Style/style";
import BlogCard from "../../Components/Cards/Card";
import homebg from "../../Style/Images/home-bg.svg";
import wave from "../../Style/Images/wave.svg";

const theme = createTheme(muiThemeConst);

export default function Home() {
  document.title = "Reader's - Home";

  // Blog Search and Filter
  const [blogs, setBlog] = useState([
    {
      blogGenre: ["Thriller", "Adreniline", "Gripping"],
      blogTitle: "Murder On Orient Express",
      blogContent:
        "Murder on the Orient Express is a work of detective fiction by English writer Agatha Christie featuring the Belgian detective Hercule Poirot. It was first published in the United Kingdom by the Collins Crime Club on 1 January 1934. In the United States, it was published on 28 February 1934,[1][2] under the title of Murder in the Calais Coach, by Dodd, Mead and Company.[3][4] The UK edition retailed at seven shillings and sixpence (7/6)[5] and the US edition at $2.[4] The elegant train of the 1930s, the Orient Express, is stopped by heavy snowfall. A murder is discovered, and Poirot's trip home to London from the Middle East is interrupted to solve the case. The opening chapters of the novel take place in Istanbul. The rest of the novel takes place in Yugoslavia, with the train trapped between Vinkovci and Brod. sThe US title of Murder in the Calais Coach was used to avoid confusion with the 1932 Graham Greene novel Stamboul Train, which had been published in the United States as Orient Express.[6]",
      blogImage:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Murder_on_the_Orient_Express_First_Edition_Cover_1934.jpg/220px-Murder_on_the_Orient_Express_First_Edition_Cover_1934.jpg",
      email: "sharvil.d@somaiya.edu",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["Money", "Dollars", "Wealth"],
      blogTitle: "Money! It's Gas",
      blogContent: `The use of barter-like methods may date back to at least 100,000 years ago, though there is no evidence of a society or economy that relied primarily on barter.[12][13] Instead, non-monetary societies operated largely along the principles of gift economy and debt.[14][15] When barter did in fact occur, it was usually between either complete strangers or potential enemies.[16] Many cultures around the world eventually developed the use of commodity money. The Mesopotamian shekel was a unit of weight, and relied on the mass of something like 160 grains of barley.[17] The first usage of the term came from Mesopotamia circa 3000 BC. Societies in the Americas, Asia, Africa and Australia used shell money – often, the shells of the cowry (Cypraea moneta L. or C. annulus L.). According to Herodotus, the Lydians were the first people to introduce the use of gold and silver coins.[18] It is thought by modern scholars that these first stamped coins were minted around 650 to 600 BC.[19] . The system of commodity money eventually evolved into a system of representative money.[citation needed] This occurred because gold and silver merchants or banks would issue receipts to their depositors – redeemable for the commodity money deposited. Eventually, these receipts became generally accepted as a means of payment and were used as money. Paper money or banknotes were first used in China during the Song dynasty. These banknotes, known as "jiaozi", evolved from promissory notes that had been used since the 7th century. However, they did not displace commodity money and were used alongside coins. In the 13th century, paper money became known in Europe through the accounts of travellers, such as Marco Polo and William of Rubruck.[20] Marco Polo's account of paper money during the Yuan dynasty is the subject of a chapter of his book, The Travels of Marco Polo, titled "How the Great Kaan Causeth the Bark of Trees, Made Into Something Like Paper, to Pass for Money All Over his Country."[21] Banknotes were first issued in Europe by Stockholms Banco in 1661 and were again also used alongside coins. The gold standard, a monetary system where the medium of exchange are paper notes that are convertible into pre-set, fixed quantities of gold, replaced the use of gold coins as currency in the 17th–19th centuries in Europe. These gold standard notes were made legal tender, and redemption into gold coins was discouraged. By the beginning of the 20th century, almost all countries had adopted the gold standard, backing their legal tender notes with fixed amounts of gold. After World War II and the Bretton Woods Conference, most countries adopted fiat currencies that were fixed to the U.S. dollar. The U.S. dollar was in turn fixed to gold. In 1971 the U.S. government suspended the convertibility of the dollar to gold. After this many countries de-pegged their currencies from the U.S. dollar, and most of the world's currencies became unbacked by anything except the governments' fiat of legal tender and the ability to convert the money into goods via payment. According to proponents of modern money theory, fiat money is also backed by taxes. By imposing taxes, states create demand for the currency they issue.[22]"`,
      blogImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/BMC_06.jpg/220px-BMC_06.jpg",
      email: "sharvil.dandekar@gmail.com",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["Smart", "Ingenuity", "Mental Well being"],
      blogTitle: "Humans",
      blogContent:
        "Mental illnesses are more common than cancer, diabetes, or heart disease. Over 26 percent of all Americans over the age of 18 meet the criteria for having a mental illness.[32] Evidence suggests that 450 million people worldwide have some mental illness. Major depression ranks fourth among the top 10 leading causes of disease worldwide. By 2029, mental illness is predicted to become the leading cause of disease worldwide. Women are more likely to have a mental illness than men. One million people commit suicide every year and 10 to 20 million attempt it.[33] A World Health Organization (WHO) report estimates the global cost of mental illness at nearly $2.5 trillion (two-thirds in indirect costs) in 2010, with a projected increase to over $6 trillion by 2030.[34] Evidence from the WHO suggests that nearly half of the world's population is affected by mental illness with an impact on their self-esteem, relationships and ability to function in everyday life.[35] An individual's emotional health can impact their physical health. Poor mental health can lead to problems such as the inability to make adequate decisions and substance use disorders.[36] Good mental health can improve life quality whereas poor mental health can worsen it. According to Richards, Campania, & Muse-Burke, There is growing evidence that is showing emotional abilities are associated with pro-social behaviors such as stress management and physical health.[36] Their research also concluded that people who lack emotional expression are inclined to anti-social behaviors (e.g., substance use disorder and alcohol use disorder, physical fights, vandalism), which reflects one's mental health and suppressed emotions.[36] Adults and children who face mental illness may experience social stigma, which can exacerbate the issues.[37]",
      blogImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.10UL-F9KDe--zbJ2G0l6EAHaFY%26pid%3DApi&f=1",
      email: "taksha.l@gmail.com",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["History", "Archeology", "Mental Well being"],
      blogTitle: "Vestige Of Time",
      blogContent:
        "Mental illnesses are more common than cancer, diabetes, or heart disease. Over 26 percent of all Americans over the age of 18 meet the criteria for having a mental illness.[32] Evidence suggests that 450 million people worldwide have some mental illness. Major depression ranks fourth among the top 10 leading causes of disease worldwide. By 2029, mental illness is predicted to become the leading cause of disease worldwide. Women are more likely to have a mental illness than men. One million people commit suicide every year and 10 to 20 million attempt it.[33] A World Health Organization (WHO) report estimates the global cost of mental illness at nearly $2.5 trillion (two-thirds in indirect costs) in 2010, with a projected increase to over $6 trillion by 2030.[34] Evidence from the WHO suggests that nearly half of the world's population is affected by mental illness with an impact on their self-esteem, relationships and ability to function in everyday life.[35] An individual's emotional health can impact their physical health. Poor mental health can lead to problems such as the inability to make adequate decisions and substance use disorders.[36] Good mental health can improve life quality whereas poor mental health can worsen it. According to Richards, Campania, & Muse-Burke, There is growing evidence that is showing emotional abilities are associated with pro-social behaviors such as stress management and physical health.[36] Their research also concluded that people who lack emotional expression are inclined to anti-social behaviors (e.g., substance use disorder and alcohol use disorder, physical fights, vandalism), which reflects one's mental health and suppressed emotions.[36] Adults and children who face mental illness may experience social stigma, which can exacerbate the issues.[37]",
      blogImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdailytimes.com.pk%2Fassets%2Fuploads%2F2019%2F07%2F21%2Fhistory.jpg&f=1&nofb=1",
      email: "yash.b@gmail.com",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["Love", "Sex", "Lonliness"],
      blogTitle: "She Friend-Zoned My Love",
      blogContent:
        "Mental illnesses are more common than cancer, diabetes, or heart disease. Over 26 percent of all Americans over the age of 18 meet the criteria for having a mental illness.[32] Evidence suggests that 450 million people worldwide have some mental illness. Major depression ranks fourth among the top 10 leading causes of disease worldwide. By 2029, mental illness is predicted to become the leading cause of disease worldwide. Women are more likely to have a mental illness than men. One million people commit suicide every year and 10 to 20 million attempt it.[33] A World Health Organization (WHO) report estimates the global cost of mental illness at nearly $2.5 trillion (two-thirds in indirect costs) in 2010, with a projected increase to over $6 trillion by 2030.[34] Evidence from the WHO suggests that nearly half of the world's population is affected by mental illness with an impact on their self-esteem, relationships and ability to function in everyday life.[35] An individual's emotional health can impact their physical health. Poor mental health can lead to problems such as the inability to make adequate decisions and substance use disorders.[36] Good mental health can improve life quality whereas poor mental health can worsen it. According to Richards, Campania, & Muse-Burke, There is growing evidence that is showing emotional abilities are associated with pro-social behaviors such as stress management and physical health.[36] Their research also concluded that people who lack emotional expression are inclined to anti-social behaviors (e.g., substance use disorder and alcohol use disorder, physical fights, vandalism), which reflects one's mental health and suppressed emotions.[36] Adults and children who face mental illness may experience social stigma, which can exacerbate the issues.[37]",
      blogImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-yiVmkbLlG88%2FUA7d7ytLp8I%2FAAAAAAAAA_U%2F-FnOwfJegsQ%2Fs1600%2FLove-Hurts-Wallpaper-e1337173136922.jpg&f=1&nofb=1",
      email: "taksha.l@gmail.com",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["Management", "Team Leading"],
      blogTitle: "Bonsai Manager",
      blogContent:
        "Mental illnesses are more common than cancer, diabetes, or heart disease. Over 26 percent of all Americans over the age of 18 meet the criteria for having a mental illness.[32] Evidence suggests that 450 million people worldwide have some mental illness. Major depression ranks fourth among the top 10 leading causes of disease worldwide. By 2029, mental illness is predicted to become the leading cause of disease worldwide. Women are more likely to have a mental illness than men. One million people commit suicide every year and 10 to 20 million attempt it.[33] A World Health Organization (WHO) report estimates the global cost of mental illness at nearly $2.5 trillion (two-thirds in indirect costs) in 2010, with a projected increase to over $6 trillion by 2030.[34] Evidence from the WHO suggests that nearly half of the world's population is affected by mental illness with an impact on their self-esteem, relationships and ability to function in everyday life.[35] An individual's emotional health can impact their physical health. Poor mental health can lead to problems such as the inability to make adequate decisions and substance use disorders.[36] Good mental health can improve life quality whereas poor mental health can worsen it. According to Richards, Campania, & Muse-Burke, There is growing evidence that is showing emotional abilities are associated with pro-social behaviors such as stress management and physical health.[36] Their research also concluded that people who lack emotional expression are inclined to anti-social behaviors (e.g., substance use disorder and alcohol use disorder, physical fights, vandalism), which reflects one's mental health and suppressed emotions.[36] Adults and children who face mental illness may experience social stigma, which can exacerbate the issues.[37]",
      blogImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Ftkqjx5ribu021.jpg%3Fauto%3Dwebp%26s%3D89fd757918e63a264b455c26ddd7defe0253e584&f=1&nofb=1",
      email: "taksha.l@gmail.com",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["War", "Skill", "Complexity"],
      blogTitle: "Art Of War",
      blogContent:
        "Mental illnesses are more common than cancer, diabetes, or heart disease. Over 26 percent of all Americans over the age of 18 meet the criteria for having a mental illness.[32] Evidence suggests that 450 million people worldwide have some mental illness. Major depression ranks fourth among the top 10 leading causes of disease worldwide. By 2029, mental illness is predicted to become the leading cause of disease worldwide. Women are more likely to have a mental illness than men. One million people commit suicide every year and 10 to 20 million attempt it.[33] A World Health Organization (WHO) report estimates the global cost of mental illness at nearly $2.5 trillion (two-thirds in indirect costs) in 2010, with a projected increase to over $6 trillion by 2030.[34] Evidence from the WHO suggests that nearly half of the world's population is affected by mental illness with an impact on their self-esteem, relationships and ability to function in everyday life.[35] An individual's emotional health can impact their physical health. Poor mental health can lead to problems such as the inability to make adequate decisions and substance use disorders.[36] Good mental health can improve life quality whereas poor mental health can worsen it. According to Richards, Campania, & Muse-Burke, There is growing evidence that is showing emotional abilities are associated with pro-social behaviors such as stress management and physical health.[36] Their research also concluded that people who lack emotional expression are inclined to anti-social behaviors (e.g., substance use disorder and alcohol use disorder, physical fights, vandalism), which reflects one's mental health and suppressed emotions.[36] Adults and children who face mental illness may experience social stigma, which can exacerbate the issues.[37]",
      blogImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Facc-cdn.azureedge.net%2Fmrlnop420media%2F0005358_solomon-sword-limited-edition.jpeg&f=1&nofb=1",
      email: "ehlaam.h@gmail.com",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["Engineering", "Airplane", "Boeing"],
      blogTitle: "May-Day",
      blogContent:
        "Mental illnesses are more common than cancer, diabetes, or heart disease. Over 26 percent of all Americans over the age of 18 meet the criteria for having a mental illness.[32] Evidence suggests that 450 million people worldwide have some mental illness. Major depression ranks fourth among the top 10 leading causes of disease worldwide. By 2029, mental illness is predicted to become the leading cause of disease worldwide. Women are more likely to have a mental illness than men. One million people commit suicide every year and 10 to 20 million attempt it.[33] A World Health Organization (WHO) report estimates the global cost of mental illness at nearly $2.5 trillion (two-thirds in indirect costs) in 2010, with a projected increase to over $6 trillion by 2030.[34] Evidence from the WHO suggests that nearly half of the world's population is affected by mental illness with an impact on their self-esteem, relationships and ability to function in everyday life.[35] An individual's emotional health can impact their physical health. Poor mental health can lead to problems such as the inability to make adequate decisions and substance use disorders.[36] Good mental health can improve life quality whereas poor mental health can worsen it. According to Richards, Campania, & Muse-Burke, There is growing evidence that is showing emotional abilities are associated with pro-social behaviors such as stress management and physical health.[36] Their research also concluded that people who lack emotional expression are inclined to anti-social behaviors (e.g., substance use disorder and alcohol use disorder, physical fights, vandalism), which reflects one's mental health and suppressed emotions.[36] Adults and children who face mental illness may experience social stigma, which can exacerbate the issues.[37]",
      blogImage:
        "https://www.scienceabc.com/wp-content/uploads/2016/01/airplane-boeing.jpg",
      email: "taksha.l@gmail.com",
      date: `${new Date()}`,
    },
    {
      blogGenre: ["Data Science", "Math", "Science"],
      blogTitle: "Neural Nets and Its Nuances",
      blogContent:
        "A neural network is a network or circuit of biological neurons, or, in a modern sense, an artificial neural network, composed of artificial neurons or nodes.[1] Thus, a neural network is either a biological neural network, made up of biological neurons, or an artificial neural network, used for solving artificial intelligence (AI) problems. The connections of the biological neuron are modeled in artificial neural networks as weights between nodes. A positive weight reflects an excitatory connection, while negative values mean inhibitory connections. All inputs are modified by a weight and summed. This activity is referred to as a linear combination. Finally, an activation function controls the amplitude of the output. For example, an acceptable range of output is usually between 0 and 1, or it could be −1 and 1. These artificial networks may be used for predictive modeling, adaptive control and applications where they can be trained via a dataset. Self-learning resulting from experience can occur within networks, which can derive conclusions from a complex and seemingly unrelated set of information.[2]",
      blogImage:
        "https://tutorials.retopall.com/wp-content/uploads/2019/03/artificial-neural-network.jpg",
      email: "taksha.l@gmail.com",
      date: `${new Date()}`,
    },
    // {
    //   blogGenre: ["Finance", "Technology", "Money"],
    //   blogTitle: "Story of Spyke Finance",
    //   blogContent:
    //     "Spyke Finance is an extremely famous financial company aiming to provide financial freedom to people. It was founded by Sharvil Dandekar and Taksha Limbasha. Spyke finance rcommennds stocks to people with 90% accuracy of making profits in the trade. It currently has a userbase of 30 million and is increasing day by day.",
    //   blogImage:
    //     "https://spykefinance.com/static/media/Logo-Dark-Rect.585379e2.jpg",
    //   email: "taksha.l@somaiya.edu",
    //   date: `${new Date()}`,
    // },
  ]);

  const [searchFilter, setSearchFilter] = useState("");
  const [showBlogs, setShowBlogs] = useState(blogs);
  const setFilter = (e) => {
    setSearchFilter(e.target.value);
    setShowBlogs(() => {
      var filterBlogs = [];
      blogs.map((blog) => {
        if (
          blog.blogTitle.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          filterBlogs.push(blog);
        }
      });
      return filterBlogs;
    });
  };

  // Modal Data Parse
  const [genre, setGenre] = useState("");
  const [modalData, setModalData] = useState({
    open: false,
    blogTitle: "",
    blogGenre: [],
    blogContent: "",
    blogImage: "",
    email: "",
    date: `${new Date()}`,
  });

  const handleOpenModal = () => {
    setModalData((prev) => {
      return { ...prev, open: true };
    });
  };

  const handleCloseModal = () => {
    setModalData((prev) => {
      return { ...prev, open: false };
    });
  };

  const editBlog = (e) => {
    setModalData((prev) => {
      if (e.target.name !== "blogGenre") {
        return { ...prev, [e.target.name]: e.target.value };
      } else {
        setGenre(e.target.value);
        return prev;
      }
    });
  };

  const submitModal = () => {
    var submit = {
      blogTitle: modalData.blogTitle,
      blogGenre: [],
      blogContent: modalData.blogContent,
      blogImage: modalData.blogImage,
      email: modalData.email,
      date: `${new Date()}`,
    };
    let genreList = genre.replace(/ /g, "");
    submit.blogGenre = genreList.split(",");
    setBlog((prev) => {
      return [...prev, submit];
    });
    setGenre("");
    setModalData({
      open: false,
      blogTitle: "",
      blogGenre: [],
      blogContent: "",
      blogImage: "",
      email: "",
      date: `${new Date()}`,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar modalVal={modalData} modalOpen={handleOpenModal} />
      <main style={{ background: "#f6efcb" }}>
        <Modal
          open={modalData.open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80vw",
              height: "80vh",
              bgcolor: "#f6efcb",
              border: "2px solid #ff5722",
              boxShadow: 24,
              borderRadius: "1.2em",
              textAlign: "center",
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ color: "#ff5722", textAlign: "center", fontSize: "2em" }}
            >
              Add a Blog
            </Typography>
            <TextField
              style={{ margin: "0.55% 0 0 0", width: "100%" }}
              value={modalData.blogTitle}
              onChange={editBlog}
              name="blogTitle"
              label="Blog Title"
            />
            <TextField
              style={{ margin: "0.55% 0 0 0", width: "100%" }}
              value={genre}
              onChange={editBlog}
              name="blogGenre"
              label="Blog Genre"
            />
            <TextField
              style={{ margin: "0.55% 0 0 0", width: "100%" }}
              value={modalData.blogContent}
              onChange={editBlog}
              name="blogContent"
              multiline
              minRows={4}
              maxRows={4}
              label="Blog Content"
            />
            <TextField
              style={{ margin: "0.55% 0 0 0", width: "100%" }}
              value={modalData.email}
              onChange={editBlog}
              name="email"
              label="Blog Email"
            />
            <TextField
              style={{ margin: "0.55% 0 0.55% 0", width: "100%" }}
              value={modalData.blogImage}
              onChange={editBlog}
              name="blogImage"
              label="Blog Image URL"
            />
            <Button variant="contained" onClick={submitModal}>
              Submit
            </Button>
          </Box>
        </Modal>
        {/* Hero unit */}
        <Box
          sx={{
            background: `url(${homebg})`,
            backgroundSize: "cover",
            backgroundPositionY: "bottom",
            backgroundPositionX: "center",
            pt: 14,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#fff"
              gutterBottom
            >
              Welcome To the Hut
            </Typography>
            <Typography variant="h5" align="center" color="#eee" paragraph>
              Here are some of our Most Liked Reads and Picks.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ paddingTop: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <h1
                style={{
                  color: "#ff5722",
                  borderBottom: "1px Solid #ff5722",
                  fontWeight: "500",
                }}
              >
                Hot Reads
              </h1>
            </Grid>
            {blogs.map((blog, index) => {
              if (index < 3) {
                return (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    style={{ maxHeight: "60vh" }}
                  >
                    <BlogCard data={blog} />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Container>
        <Box
          sx={{
            background: `url(${wave})`,
            backgroundSize: "cover",
            minHeight: "30vh",
            maxWidth: "100vw",
            margin: 0,
            padding: 0,
          }}
        ></Box>
        <Box
          sx={{
            background: `#ff5722`,
            backgroundSize: "cover",
            minHeight: "30vh",
            maxWidth: "100vw",
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{ py: 8 }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={4} maxWidth="md">
              <Grid item xs={12}>
                <h1
                  style={{
                    color: "#fff",
                    borderBottom: "1px Solid #fff",
                    fontWeight: "500",
                  }}
                >
                  Search Blog
                </h1>
              </Grid>
              <Grid
                sx={{ display: "flex", justifyContent: "center" }}
                item
                xs={12}
              >
                <input
                  type="text"
                  placeholder="Search By Title"
                  value={searchFilter}
                  onChange={setFilter}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.4)",
                    box: "none",
                    padding: "1% 5%",
                    color: "#fff",
                    width: "80vw",
                    fontSize: "1.2em",
                    outline: "none",
                    border: "2px solid #fff",
                    borderRadius: "10em",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            background: `url(${wave})`,
            backgroundSize: "cover",
            backgroundPositionX: "right",
            backgroundPositionY: "bottom",
            minHeight: "15vh",
            transform: "rotate(180deg)",
            MozTransform: "rotate(180deg)",
            WebkitTransform: "rotate(180deg)",
            OTransform: "rotate(180deg)",
            MsTransform: "rotate(180deg)",
            maxWidth: "100vw",
            margin: 0,
            padding: 0,
          }}
        ></Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {showBlogs.map((blog, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  style={{ maxHeight: "60vh" }}
                >
                  <BlogCard data={blog} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          The Reader's Hut
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Blog Away
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
