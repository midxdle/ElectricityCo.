import './SecSeven.css';
import PicsOne from "../../images/logo_small.png";

const SecSeven = () => {
    return (
        <div className='secseven'>

        <h1 className="text7">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </h1>

        <div className="item7">
        <div className="texts7">

        <div className="item71">
        <div className="pics71">
          <img
                src={PicsOne}
                alt="PicsOne"
            ></img>
          </div>

          <div className='txt71'>
          <a href='/help'>لورم ایپسوم</a>
          </div>
        </div>
        
          <div className="item72">
          <div className="pics72">
            <img
                src={PicsOne}
                alt="PicsTwo"
            ></img>
            </div>

            <div className='txt72'>
          <a href='/videos'>لورم ایپسوم</a>
          </div>
          </div>
            
            <div className="item73">
            <div className="pics73">
            <img
                 src={PicsOne}
                alt="PicsThree"
            ></img>
            </div>

            <div className='txt73'>
          <a href='/blog'>لورم ایپسوم</a>
          </div>
            </div>
            
            <div className="item74">
            <div className="pics74">
            <img
                src={PicsOne}
                alt="PicsFour"
            ></img>
          </div>

          <div className="txt74">
          <a href='/faq'>لورم ایپسوم</a>
          </div>
        </div>
            </div>


          </div>
        </div>
    )
}

export default SecSeven;