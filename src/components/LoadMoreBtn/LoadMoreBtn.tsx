import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
  loading: boolean;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, loading }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMoreBtn;