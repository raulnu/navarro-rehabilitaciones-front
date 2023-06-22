import styles from "./styles.module.scss";
import data from "../../../data/presentation.json";

export const Presentation = ({ data }: IProps) => {
  return (
    <section className={`${styles.presentation}`}>
      <h3 className={`${styles.presentation__title}`}>{data.title}</h3>
      {data.description && data.description.map((text, index) => {
        return (
          <p className={`${styles.presentation__description}`} key={index}>
            {text}
          </p>
        );
      })}
    </section>
  );
};

export default Presentation;

interface IProps {
  data: {
    title: string;
    description?: string[];
  };
}
