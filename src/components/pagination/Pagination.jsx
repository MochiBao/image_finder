import s from './pagination.module.css'
const Pagination = ({plusPage}) => {
    return (
      <button className={s.Button} onClick={plusPage}>Load more</button>
    )
}

export default Pagination;



