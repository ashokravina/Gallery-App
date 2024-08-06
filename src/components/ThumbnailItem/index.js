// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbDetails, onChangeMethod, isActive} = props
  const {thumbnailUrl, thumbnailAltTex, id} = thumbDetails
  const onchangeButton = () => {
    onChangeMethod(id)
  }
  const activeClassName = isActive ? 'active-container' : 'item-container'
  return (
    <li className={activeClassName}>

      <button className="button" type="button" onClick={onchangeButton}>
        <img src={thumbnailUrl} alt={thumbnailAltTex} className="img" />
      </button>
    </li>
  )
}
export default ThumbnailItem
