import React, {useRef} from 'react';

const Observer = (setPageNum) => {

    const observer = useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPageNum((no) => no + 1);
                }
            })
    );
     return observer;
}

  export {
      Observer
  }