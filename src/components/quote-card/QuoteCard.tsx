import styles from "./QuoteCard.module.scss";

type Props = {
  quote: string;
  author: string;
};

export function QuoteCard({ quote, author }: Props) {
  return (
    <div
      className={`${styles["quote-card"]} d-flex flex-column align-items-center justify-content-around`}
    >
      <div className="text-center">
        <p className={`${styles.quote}`}>{quote}</p>
        <p className={`${styles.author} pt-4`}>{author}</p>
      </div>
    </div>
  );
}
