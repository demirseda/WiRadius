import React, { Component } from 'react';

import "../../assets/css/faq.css";
import axios from 'axios';

class Faq extends Component {

  constructor(props) {
    super(props);
    this.toggleTab = this.toggleTab.bind(this);
    this.accordion = this.accordion.bind(this);

}

state = {

  toggleState: 1,
  clicked: false,
  faqs: []
}
 
array = {"public": "Genel Sorular","member" : "Abonelik İşlemleri" , "shm" : "Stok & Hizmet & Masraf" , "invoice" : "e-Fatura / e-Arşiv Fatura" , "mobile_app" : "Mobil Uygulama" };
 //const [toggleState, setToggleState] = useState(1);
  
  //const [clicked, setClicked] = useState(false);

   toggleTab = (index) => {
    this.setState({toggleState: index});
  }
  
   /*accordion = index =>{
    if(clicked === index){
      return setClicked(null);
    }
    setClicked(index);

  };*/

  accordion = index =>{

    if(this.state.clicked === index){
      return this.setState({clicked: null});
    }
    this.setState({clicked: index});
   
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() 
  {
   var data = await axios.post(`https://web.cetvel.com.tr/help/getWiHelp`);

   this.setState({ faqs : data.data });
  }

  render(){

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    return (
      <div className='faq'>
          <div className='page_header'>
            <div className='sss_header'>
              <div className='bgColorOpacity'></div>
              <div className='text'>
                  <h3>Sıkça Sorulan Sorular</h3>
                  <p>WiRadius hakkında bilmeniz gereken her şey..</p>
              </div>
            </div>               
          </div>
          <div className='page_content'>
              <div className='question_type'>
                <div className='block_tabs'>

                {Object.entries(this.state.faqs).map(([key, value]) => {                 
                   return Object.entries(value).map( (k,v) => {
                      return(
                        <div  className={this.state.toggleState === v + 1 ? "tabs active_tabs" : "tabs"} onClick = { () => this.toggleTab(v + 1)} > <h3> {this.array[k[0]]} </h3> </div>
                    )
                    });
                  })}
                </div>
              </div>
              <div className='sss'>                
                <div className='content_tabs'>
                {Object.entries(this.state.faqs).map(([key, value]) => { 
                   return  Object.entries(value).map( (k,v) => {
                      return(
                        <>
                        {k[1].map( (kk,vv) => {
                        
                          return (
                            <div className={this.state.toggleState ===  v + 1 ? "content active_content" : "content"}>
                              <div className={this.state.clicked === kk ? "question_div animation" : "question_div"} onClick={ () => this.accordion(kk) } key={kk}>
                                <h4> {kk.question} </h4>
                                <i className={this.state.clicked === kk ? "bx bx-minus-circle" : "bx bx-plus-circle" }></i>
                              </div>
                              {this.state.clicked === kk ? (
                                  <div className='answer_div'>
                                    <p> {renderHTML(kk.answer)} </p>
                                  </div>
                              ): null}
                            </div>
                          );

                        })}
                        </>
                    )
                    });
                  })}
                </div>        
              </div>
          </div>
      </div>
    )
  }
}

export default Faq;