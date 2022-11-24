import React from "react";
import "./Writers.css";

const Writers = () => {
  return (
    <section className="writers text-center">
      <div className="writerContainer">
        <div className="all">
          <h2 className="writersTitle mb-5">Our Writers</h2>
          <div className="writersBoxes row">
            <div className="writerBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab54f4483041e5969e7e9_pexels-mikhail-nilov-6592361-1.jpg"
                alt=""
                className="img-fluid mb-3"
              />
              <div className="writerPos mb-3">Author</div>
              <div className="WriterName">Enzo Romano</div>
              <hr />
            </div>
            <div className="writerBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab5578c523a8decbbeff2_pexels-cottonbro-4098260-1.jpg"
                alt=""
                className="img-fluid mb-3"
              />
              <div className="writerPos mb-3">Author</div>
              <div className="WriterName">Liv Gunther</div>
              <hr />
            </div>
            <div className="writerBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab564c266a35b284cae42_pexels-emmy-e-2381069-1.jpg"
                alt=""
                className="img-fluid mb-3"
              />
              <div className="writerPos mb-3">Author</div>
              <div className="WriterName">Martha Collins</div>
              <hr />
            </div>
            <div className="writerBox col-lg-3">
              <img
                src="https://assets.website-files.com/62c6c96b82f7ca8b04b15040/62dab56c8c523a026ebbf174_pexels-karolina-grabowska-6333501-1.jpg"
                alt=""
                className="img-fluid mb-3"
              />
              <div className="writerPos mb-3">Author</div>
              <div className="WriterName">Thomas Newman</div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writers;
