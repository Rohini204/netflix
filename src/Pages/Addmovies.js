import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Addmovies.css'

const Addmovies = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [newMovieName,setNewMovieName] = useState('');
    const [movieList,setMovieList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(()=>{
        const fetchData = async() => {
          const response = await axios.get("http://localhost:3003/read")
          setMovieList(response.data)
        }
        fetchData()
    
      },[movieList])

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3003/upload',{
            title,desc
        })
        
    }

    const updateMovie = (id) =>{
        axios.put('http://localhost:3003/update',{
          id: id,
          newMovieName: newMovieName
        })
      }
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
      const deleteMovie = (id) =>{
        axios.delete(`http://localhost:3003/delete/${id}`,{
          id:id,
          newMovieName: newMovieName
        })
      }

  return (
    <div className='Addmovies'>
        <center><h1>Add Movies</h1></center>
        <div className='am'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Movie Title' onChange={(e)=>{setTitle(e.target.value)}} required/><br /> <br />
            <input type="text" placeholder='description' onChange={(e)=>{setDesc(e.target.value)}} required/><br /><br />
            <center><input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        /></center> <br /><br />
            <button type='submit'>Upload</button>
        </form>
        {selectedImage && ( // Conditionally display the image if selected
        <div>
          <img src={selectedImage} alt="Preview" style={{ maxWidth: '300px', marginTop: '20px' }} />
        </div>
      )}
      </div>
        {movieList.map((val, key)=>{
        return(
          <div className='food' key={key}>
            <h3>{val.title}</h3>
            <h3>{val.desc}</h3>
            <input type="text" placeholder='Change Movie... ' value={newMovieName}
            onChange={(e)=>{setNewMovieName(e.target.value)}} /> <br />
            <div>

            <button onClick={()=>updateMovie(val._id)}>Update</button>
            <button onClick={()=>deleteMovie(val._id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Addmovies