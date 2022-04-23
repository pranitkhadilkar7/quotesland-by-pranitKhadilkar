import { MainNav } from "../../components/navigation/MainNav";
import { QuoteCard } from "../../components/quote-card/QuoteCard";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <>
      <MainNav />
      <div
        className={`d-flex flex-column align-items-center h-100 overflow-auto ${styles["home-container"]}`}
      >
        <div className="my-4">
          <p className={styles.title}>Quote of the day</p>
        </div>
        <QuoteCard
          quote="Be yourself; everyone else is already taken."
          author="Oscar Wilde"
        />
        <a
          href="/"
          className={`py-4 ${styles["footer-text"]}`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          More Quotes
        </a>
      </div>
    </>
  );
}
