import "./SectionSupport.css";

const SectionSupport = () => {
  return (
    <section className="SectionSupport">
      <div class="SectionSupportBtnsAndEmail">
        <div class="SectionsSupportBtns">
          <button className="SectionSupportFaqBtn">سوالات متداول</button>
          <button className="SectionSupportCallBtn">تماس با پشتیبانی</button>
        </div>
        <p className="SectionSupportEmail">support@support.ir</p>
      </div>
      <p className="SectionSupportP">
        پاسخگوی شما هستیم
      </p>
    </section>
  );
};

export default SectionSupport;
