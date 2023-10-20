import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAlbumsAction, setFormMode } from "./albumSlice"
import { Link } from "react-router-dom";
import AlbumDisplay from "./AlbumDisplay";

const AlbumList = () => {
    const dispatch = useDispatch()
    const albums = useSelector(state => state.albums.albums)
    const user = useSelector(state => state.auth.user)

    const [filterMode, setFilterMode] = useState("")

    useEffect(() => {
        dispatch(fetchAlbumsAction())
    }, []);

    const sortedAlbums = () => {
        if (albums.length > 0) {
        switch (filterMode) {
            case "title":
            return [...albums].sort((a, b) => a.title.localeCompare(b.title))
            case "score":
            return [...albums].sort((a, b) => b.score - a.score)
            default: 
            return [...albums].sort((a, b) => a.id.localeCompare(b.id))
        }
        } else return []
    }

    const filterModeChangeHandler = (event) => {
        console.log(event.target.value);
        setFilterMode(event.target.value)
    }
    return ( 
    <div className="row my-3">
        <div className="rounded bg-dark text-light p-3">
          <div className="d-flex align-items-center">
            <h3>Albums</h3>
            <span className="ms-auto">filtered by:</span>
            <select id="filterMode" className="ms-2 bg-dark text-light form-select w-25" value={filterMode} onChange={filterModeChangeHandler}>
              <option value="">Select a filter</option>
              <option value="title">Title</option>
              <option value="score">Score</option>
            </select>
            {user && <Link to="/add" className="ms-2 btn btn-success" onClick={() => dispatch(setFormMode("add"))}><i className="bi bi-plus-circle"></i> Add</Link>}
          </div>
          <hr />
          {albums.length === 0 ? 
          <p>There is no album in the database!</p> :
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
            {sortedAlbums().map(album => <AlbumDisplay key={album.id} album={album} />)}
          </div>}
        </div>
      </div>
     );
}
 
export default AlbumList;