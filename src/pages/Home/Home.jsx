import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Container from '../../components/UI/Container';
import Grid from '../../components/UI/Grid';
import { getData } from '../../utils/helper';

const getUrl = 'https://autumn-delicate-wilderness.glitch.me/v1/content/skills';

const Home = () => {
  const [skillsArr, setSkillsArr] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const token = localStorage.getItem('token');
    console.log('token ===', token);
    const skillsFromApi = await getData(getUrl, token);
    console.log('skillsFromApi ===', skillsFromApi);
    setSkillsArr(skillsFromApi);
  };

  return (
    <Container>
      <h2>Home page</h2>
      <Grid>
        {skillsArr.map((sObj) => (
          <Card
            key={sObj.id}
            title={sObj.title}
            description={sObj.description}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
