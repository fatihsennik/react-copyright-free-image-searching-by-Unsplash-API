import React from "react";


class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();

    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans})
    }

    render() {
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <a href={this.props.image.links.download} target="_blank">
                    <img className="ui medium rounded image" alt={this.props.image.alt_description} ref={this.imageRef}
                         src={this.props.image.urls.regular}/>
                </a>
            </div>
        );
    }


}

export default ImageCard