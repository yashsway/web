
import React from 'react';
import HeaderItem from './HeaderItem';
import ContentItem from './ContentItem';
import ListItem from './ListItem';
import VideoPlayer from './VideoPlayer';
import SVGItem from './SVGItem';
import HeroItem from './HeroItem';
import TeachingItem from './TeachingItem';
import DistanceGroupItem from './DistanceGroupItem';
import SundayMorningItem from './SundayMorningItem';
import HomeChurchItem from './HomeChurchItem';
import FormItem from './FormItem';
import LocationItem from './LocationItem';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import HomeMenu from '../Menu/HomeMenu';
import HomeFooter from '../Menu/HomeFooter';
import InstagramItem from './InstagramItem';
import Helmet from 'react-helmet'
interface Props extends RouteComponentProps {
  content: any
  data: any
}
interface State {
  data: any
}

class RenderRouter extends React.Component<Props, State> {

  renderItem() {
    if (this.props.content != null)
      return this.props.content.page.content.map((item: any, index: any) => {
        console.log(item.type)
        if (item.type === "header")
          return (<HeaderItem key={index} content={item}></HeaderItem>)
        else if (item.type === "content")
          return (<ContentItem key={index} content={item}></ContentItem>);
        else if (item.type === "videoPlayer")
          return (<VideoPlayer data={this.props.data} key={index} content={item}></VideoPlayer>);
        else if (item.type === "list")
          return (<ListItem key={index} content={item}></ListItem>);
        else if (item.type === "svg")
          return (<SVGItem key={index} content={item}></SVGItem>);
        else if (item.type === "hero")
          return (<HeroItem key={index} content={item}></HeroItem>);
        else if (item.type === "locations")
          return (<LocationItem key={index} content={item}></LocationItem>);
        else if (item.type === "teaching")
          return (<TeachingItem key={index} content={item}></TeachingItem>);
        else if (item.type === "sunday-morning")
          return (<SundayMorningItem key={index} content={item}></SundayMorningItem>);
        else if (item.type === "distance-groups")
          return (<DistanceGroupItem key={index} content={item}></DistanceGroupItem>);
        else if (item.type === "home-church")
          return (<HomeChurchItem key={index} content={item}></HomeChurchItem>);
        else if (item.type === "form")
          return (<FormItem key={index} content={item}></FormItem>);
        else if (item.type === "instagram")
          return (<InstagramItem key={index} content={item}></InstagramItem>);

        else return null
      })
    else return null
  }
  render() {
    return (

      this.props.content != null ? (
        <div>
          <Helmet>
            <title>{this.props.content.page.title}</title>
            <meta name="keywords" content={this.props.content.page.keywords}></meta>
            <meta name="description" content={this.props.content.page.description}></meta>
            <link rel="alternate" href="https://beta.themeetinghouse.com" hrefLang="en-ca" />
          </Helmet>
          <HomeMenu pageConfig={this.props.content.page.pageConfig} ></HomeMenu>
          {this.renderItem()}
          {this.props.content.page.pageConfig.showFooter ? <HomeFooter></HomeFooter> : null}
        </div>)
        : null
    )


  }
}
export default withRouter(RenderRouter);