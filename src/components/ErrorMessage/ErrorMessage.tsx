import css from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    return (
      <div>
        <p className={css.errorMessage}>Whoops, something went wrong! Please try reloading this page!</p>
      </div>
    );
  };
  
  export default ErrorMessage;