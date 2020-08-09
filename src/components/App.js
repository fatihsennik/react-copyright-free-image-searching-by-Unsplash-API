import React from "react";
import 'semantic-ui-css/semantic.min.css'
import unsplash from "../app/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import {Pagination} from 'semantic-ui-react'

class App extends React.Component {

    state = {term: "", images: [], loading: "", total: 0, total_pages: 0, activePage: 1}

    onSubmitSearchBar = term => {
        this.setState({loading: "loading", term}, async () => {
            const response = await this.fetchData();
            if (response) {
                this.setState({loading: ""});
            }
            this.setState({
                images: response.data.results,
                total: response.data.total,
                total_pages: response.data.total_pages
            });
        });
    }

    fetchData = async () => {
        return await unsplash.get("/search/photos", {
            params: {query: this.state.term, page: this.state.activePage}
        });
    }


    handlePageChange = (activePage) => {
        this.setState({activePage}, async () => {
            const response = await this.fetchData();
            this.setState({
                images: response.data.results,
            });
        });
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{marginTop: "15px"}}>
                    <SearchBar sendToApp={this.onSubmitSearchBar} loading={this.state.loading}/>
                    <ImageList images={this.state.images}/>
                    <div style={{marginBottom: "10px"}}>
                        <Pagination onPageChange={(e, {activePage}) => {
                            this.handlePageChange(activePage)
                        }} defaultActivePage={1} totalPages={this.state.total_pages}/>
                    </div>
                </div>

            </div>
        );
    }
}


export default App;