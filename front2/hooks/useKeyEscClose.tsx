import {useEffect} from "react";

const useKeyEscClose = (closeThing: any) => {
  useEffect(() => {
    const escKeyModalClose = (e:any) => {
      if (e.keyCode === 27) {
        closeThing();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
};

export default useKeyEscClose