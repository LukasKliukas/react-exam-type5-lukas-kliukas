import css from './Card.module.css';

const Card = (props) => {
  return (
    <div className={css.card}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
