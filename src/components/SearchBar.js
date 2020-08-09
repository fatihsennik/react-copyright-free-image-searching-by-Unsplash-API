import React from "react"
import GitHubButton from 'react-github-btn';

class SearchBar extends React.Component {

    state = {term: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.sendToApp(this.state.term);
    }

    render() {
        return (
            <div className="ui padded yellow segment">
                <div className="ui bottom left attached label">Developer Fatih Şennik <a
                    href="mailto:info@fatihsennik.com">info@fatihsennik.com</a></div>
                <form className="ui fluid form" onSubmit={this.onFormSubmit}>
                    <div className="inline fields">
                        <div className="thirteen wide field">
                            <div className={`ui icon input ${this.props.loading}`}>
                                <input type="text" placeholder="Search Copyright-free images. Type Hit Enter :) " value={this.state.term}
                                       onChange={(e) => {
                                           this.setState({term: e.target.value})
                                       }}/>
                                <i className="search icon"></i>
                            </div>
                        </div>
                        <div className="five wide field">
                            <GitHubButton data-icon="octicon-star" data-size="large" data-show-count="true"
                                          href="https://github.com/senniksoft/react-temperature-converter">Giving Star
                                helps your brother :)
                            </GitHubButton>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;