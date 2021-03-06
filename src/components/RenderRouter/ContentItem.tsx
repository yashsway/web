
import React from 'react';
import { Button } from 'reactstrap';
import "./ContentItem.scss"
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  content: any
}
interface State {
  content: any
}
class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content
    }
  }
  navigateTo(location:any) {
    this.props.history.push(location, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

}
  imgUrl(size:any){
    if (window.location.hostname==="localhost")
        return "https://localhost:3006"
    else if (window.location.hostname.includes("beta"))
      return "https://beta.themeetinghouse.com/cache/"+size
    else
      return "https://www.themeetinghouse.com/cache/"+size
}
renderList(){
  return this.state.content.list?
    this.state.content.list.map((item:any,id:any)=>{
      return (
        item.type==="button"?
        <div key={id}>
          <Button className="contentButton" onClick={()=>{this.navigateTo(item.navigateTo)}}>{item.title}</Button>
        </div>
        :item.type==="link"?
      <div key={id}>{item.openNewBrowser?
       <a className="oneImageA" target="_blank" rel="noopener noreferrer" href={item.navigateTo}>{item.title}</a>:
       <a className="oneImageA" href={item.navigateTo}>{item.title}</a>
      }</div>
      :item.type==="text"?
      <div key={id}>
        {item.title}
      </div>
      :item.type==="event"?
      <div className="oneImageEventDetails" key={id}>
        <div >{item.date}</div>
        <div >{item.location}</div>
      </div>
      :null
      )
    })
    :null
}
  render() {
    var image1
    if (this.state.content.image1!=null)
     image1= this.state.content.image1[Math.floor(Math.random() * this.state.content.image1.length)];
    if (this.state.content.style === "oneImage") {

      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreyBox" >
              <h1 className="oneImageH1" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2">{this.state.content.header2}</h2>
              <div className="oneImageText" >{this.state.content.text1}</div>
              <div className="oneImageList" >{this.renderList()}</div>
            </div>
            <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="oneImageImage"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "greenImage") {

      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreenBox" >
              <h1 className="oneImageH1" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2">{this.state.content.header2}</h2>
              <div className="oneImageText" >{this.state.content.text1}</div>
             {this.renderList()}
            </div>
            <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="oneImageImage"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "oneImageBlack") {

      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageBlackBox" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList()}
            </div>
            <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="oneImageImage"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "oneImageBlackRight") {

      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList()}
            </div>
            <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="oneImageImage right secondImg"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "goRegionalEventsOneImageBlackRight") {

      return (
        <div className="ContentItem oneImage goRegionalEventsMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList()}
            </div>
            <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="oneImageImage right secondImg"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "oneImageGreenRight") {

      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageGreenBox right" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList()}
            </div>
            <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="oneImageImage right secondImg bottom"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
          </div>
        </div>
      )
    }
    else if(this.state.content.style === "greyTwoText"){
      return (
        <div className="ContentItem greyTwoText">
            {this.state.content.showCircle?<div>
              <div className="pieChart">

                  <div className="pie" data-start="0" data-value="30"></div>
                  <div className="pie highlight" data-start="30" data-value="30"></div>
                  <div className="pie" data-start="60" data-value="40"></div>
                  <div className="pie big" data-start="100" data-value="260"></div>
            </div>
             <div className="pieChart2">
                  <div className="pie2" data-start="0" data-value="30"></div>
                  <div className="pie2 highlight" data-start="30" data-value="30"></div>
                  <div className="pie2" data-start="60" data-value="40"></div>
                  <div className="pie2 big" data-start="100" data-value="260"></div>
              </div>
              <div className="circleHeader">{this.state.content.circleHeader}</div>
              <div className="circleText">{this.state.content.circleText}</div>
              </div>:null}
              <div className="greyTwoTextH1" >{this.state.content.header1}
              </div>

              <div className="greyTwoTextText" >{this.state.content.text1}
              {this.renderList()}
              </div>
              <div className="greyTwoClear"></div>

        </div>
      )
    }
    else if(this.state.content.style === "greenTwoText"){
      return (
        <div className="ContentItem greenTwoText">
              <div className="greenTwoTextH1" >{this.state.content.header1}</div>
              <div className="greenTwoTextText" >{this.state.content.text1}
              {this.renderList()}
              </div>
              <div className="greenTwoClear"></div>

        </div>
      )
    }
    return (null)
  }
}
export default withRouter(ContentItem)
