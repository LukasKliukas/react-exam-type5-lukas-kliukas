import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Container from '../../components/UI/Container';
import Grid from '../../components/UI/Grid';
import { getData } from '../../utils/helper';

const getUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/content/skills';

const Home = () => {
  const [skillsArr, setSkillsArr] = useState([]);
  const [isArr, setIsArr] = useState(false);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const token = localStorage.getItem('token');
    const skillsFromApi = await getData(getUrl, token);
    setSkillsArr(skillsFromApi);
    if (skillsFromApi.length > 0) {
      setIsArr(true);
    }
  };

  return (
    <Container>
      <h2>Home page</h2>
      <Grid>
        {isArr &&
          skillsArr.map((sObj) => (
            <Card
              key={sObj.id}
              title={sObj.title}
              description={sObj.description}
            />
          ))}
        {!isArr && <h2>No cards created, please create some in add page !</h2>}
      </Grid>
    </Container>
  );
};

export default Home;
