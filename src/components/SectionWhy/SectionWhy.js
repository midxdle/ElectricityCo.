import "./SectionWhy.css"
import img from "../../images/bluelogo.png";


const SectionWhy = () => {
  return (
    <section className="SectionWhy">
      <h3 className="SectionWhyHeader">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</h3>
      <div className="SectionWhyItems">
        <div className="whyitem1">
        <img className="whyimg" src={img} alt="bs"></img>
        <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
        </div>
        
        <div className="whyitem2">
        <img className="whyimg" src={img} alt="bs"></img>
        <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
        </div>
        <div className="whyitem3">
        <img className="whyimg" src={img} alt="bs"></img>
        <h2>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</h2>
        </div>
      </div>
    </section>
  );
};

export default SectionWhy;
