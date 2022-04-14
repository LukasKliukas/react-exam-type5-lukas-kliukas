import { useEffect, useState } from 'react';
import Container from '../../components/UI/Container';
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

  return <Container>Home</Container>;
};

export default Home;
