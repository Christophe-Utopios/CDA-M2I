import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteAlbumAction, setFormMode, setSelectedAlbum } from "./albumSlice"

const AlbumDisplay = (props) => {
  const dispatch = useDispatch()
  const album = props.album
  const user = useSelector(state => state.auth.user)

  const editForm = () => {
    dispatch(setFormMode("edit"))
    dispatch(setSelectedAlbum(album))
  }

  return (
    <div className="col">
      <div className="card bg-dark text-light border border-light rounded">
        <div className="card-header d-flex align-items-center">
          <span>{album.title}</span>
          {user && (
            <>
              <Link to={`/edit/${album.id}`} className="p-2 py-1 btn btn-outline-warning ms-auto" onClick={() => editForm()}><i className="bi bi-pencil-square"></i></Link>
              <button className="p-2 py-1 btn btn-outline-danger ms-2" onClick={() => dispatch(deleteAlbumAction(album.id))}><i className="bi bi-trash"></i></button>
            </>
          )}
        </div>
        <img src={album.pictureURL} alt="Album Cover" className="card-img-top border-top border-bottom border-light" />
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light d-flex"><b className="me-auto">Artist: </b>{album.artist}</li>
            <li className="list-group-item bg-dark text-light d-flex"><b className="me-auto">Release date: </b>{new Date(album.releaseDate).toLocaleDateString()}</li>
            <li className="list-group-item bg-dark text-light d-flex"><b className="me-auto">Score: </b>{[...Array(+album.score)].map((_, i) => <i className="bi bi-star-fill text-warning" key={i}></i>)}{[...Array(5 - +album.score)].map((_, i) => <i className="bi bi-star" key={i}></i>)}</li>
            <li className="list-group-item bg-dark text-light d-flex"><b className="me-auto">Price: </b>${album.price}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AlbumDisplay
