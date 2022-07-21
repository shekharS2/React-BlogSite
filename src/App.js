import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogList from './components/BlogList';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IndivisualBlog from './components/IndivisualBlog';

import './App.css';

function App() {
    const [posts, updatePosts] = useState();
    
    useEffect(() => {
		const fetchPosts = async () => {    
			const res = await axios.get(
			'https://jsonplaceholder.typicode.com/posts',
			);  
		
			updatePosts(res.data);
		}

		fetchPosts();
    }, []);

    // console.log(posts);

	if(!posts) {
		return null;
	}

    return <div className="App">
		<Router>
			<Routes>
			<Route path='/' element={<BlogList posts={posts} />} />
			<Route path='/:postId' element={<IndivisualBlog/>} />
			<Route path='*' element={<Navigate to='/' replace/>} />
			</Routes>
		</Router>
    </div>;
}

export default App;
