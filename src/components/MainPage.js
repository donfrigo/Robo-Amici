import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './MainPage.css';
import Header from "../components/Header";

class MainPage extends Component{

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;

        return !robots.length ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <Header/>
                    <SearchBox searchField={searchField} searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ this.filterRobots() }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default MainPage;