import LoadingStyle from "../Loading/Loading.module.css";

function Loading() {
  return (
    <div className={LoadingStyle["wrap-loading"]}>
      <div className={LoadingStyle["spinner-container"]}>
        <div className={LoadingStyle["loading-spinner"]}></div>
      </div>
    </div>
  );
}

export default Loading;
