import '../CSS/header.css'
import '../CSS/home.css'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory()

  return (
    <div className="header">
      <h1 className="logo-sauleja" onClick={() => history.push(`/`)}>
        Sauleja
      </h1>
    </div>
  )
}
