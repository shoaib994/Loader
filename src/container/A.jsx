import React, { useState } from "react";
import Loader from "./Loader";
const A = () => {
  const [data, setData] = useState(false);
  setTimeout(() => {
    setData(true);
  }, 3000);
  var data1 = (
    <>
      <h2>Hello World</h2>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        impedit asperiores iure eaque amet consequatur adipisci laboriosam
        voluptas aspernatur repudiandae, cumque quod. Saepe accusamus
        perspiciatis voluptatibus ipsum doloremque quis soluta!
      </h3>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        impedit asperiores iure eaque amet consequatur adipisci laboriosam
        voluptas aspernatur repudiandae, cumque quod. Saepe accusamus
        perspiciatis voluptatibus ipsum doloremque quis soluta!
      </h3>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        impedit asperiores iure eaque amet consequatur adipisci laboriosam
        voluptas aspernatur repudiandae, cumque quod. Saepe accusamus
        perspiciatis voluptatibus ipsum doloremque quis soluta!
      </h3>{" "}
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        impedit asperiores iure eaque amet consequatur adipisci laboriosam
        voluptas aspernatur repudiandae, cumque quod. Saepe accusamus
        perspiciatis voluptatibus ipsum doloremque quis soluta!
      </h3>{" "}
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        impedit asperiores iure eaque amet consequatur adipisci laboriosam
        voluptas aspernatur repudiandae, cumque quod. Saepe accusamus
        perspiciatis voluptatibus ipsum doloremque quis soluta!
      </h3>
    </>
  );
  return (
    <div>
      <Loader>{data ? data1 : null}</Loader>
    </div>
  );
};

export default A;
