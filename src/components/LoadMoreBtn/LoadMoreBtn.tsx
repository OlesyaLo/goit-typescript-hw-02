import css from "./LoadMoreBtn.module.css";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreProps) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;