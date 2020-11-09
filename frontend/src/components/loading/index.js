import React from "react";
import { BallBeat } from "react-pure-loaders";

const Loading = () => {
  return (
    <section className="home-body col-12">
      <BallBeat color={"#123abc"} loading={true} />
    </section>
  );
};

export default Loading;
