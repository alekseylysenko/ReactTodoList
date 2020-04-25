import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app';


const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'wewr'},
        {label: 'That is so good', important: false, id: 'wbvc'},
        {label: 'I need a break...', important: false, id: 'fgtr'}
    ];

    return( 
    <div className="app">   
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
           
        </div>
         <PostList posts={data}/>
         <PostAddForm/>
    </div>
 
    )
}

export default App;