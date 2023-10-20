import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAlbumAction, editAlbumAction, setFormMode } from "./albumSlice"
import { useNavigate } from "react-router-dom"

const ALbumForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const mode = useSelector(state => state.albums.formMode)
  const album = useSelector(state => state.albums.selectedAlbum)

  const titleRef = useRef()
  const priceRef = useRef()
  const releaseDateRef = useRef()
  const scoreRef = useRef()
  const artistRef = useRef()
  const pictureURLRef = useRef()

  const submitHandler = async (event) => {
    event.preventDefault()

    const title = titleRef.current.value
    const price = priceRef.current.value
    const score = scoreRef.current.value
    const artist = artistRef.current.value
    const releaseDate = releaseDateRef.current.value
    const pictureURL = pictureURLRef.current.value

    const newAlbumValues = {
      title,
      price,
      score,
      artist,
      releaseDate,
      pictureURL
    }

    if (mode === 'add') {
      dispatch(addAlbumAction(newAlbumValues))
    } else if (mode === 'edit') {
      dispatch(editAlbumAction({...newAlbumValues, id: album.id}))
    }
    
    dispatch(setFormMode(""))
    navigate("/")
  }

  return (
    <>
    <h3>{mode} album</h3>
    <hr />
    <form onSubmit={submitHandler}>
    <div className="mb-3">
        <label htmlFor="title" className="form-label">Title: </label>
        <input type="text" className="form-control" required ref={titleRef} defaultValue={album?.title} />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price: </label>
        <input type="number" step={0.01} min={0.01} className="form-control" required ref={priceRef} defaultValue={album?.price} />
      </div>
      <div className="mb-3">
        <label htmlFor="score" className="form-label">Score: </label>
        <input type="number" min={0} max={5} className="form-control" required ref={scoreRef} defaultValue={album?.score} />
      </div>
      <div className="mb-3">
        <label htmlFor="artist" className="form-label">Artist: </label>
        <input type="text" className="form-control" required ref={artistRef} defaultValue={album?.artist} />
      </div>
      <div className="mb-3">
        <label htmlFor="releaseDate" className="form-label">Release date: </label>
        <input type="date" className="form-control" required ref={releaseDateRef} defaultValue={album?.releaseDate} />
      </div>
      <div className="mb-3">
        <label htmlFor="pictureURL" className="form-label">Cover URL: </label>
        <input type="text" className="form-control" required ref={pictureURLRef} defaultValue={album?.pictureURL} />
      </div>
      <div className="text-end">
        <button className={`btn btn-${mode === 'add' ? 'success' :  'warning'}`}><i className={`bi bi-${mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i>{mode}</button>
      </div>
    </form>
    </>
  )
}

export default ALbumForm