import PropTypes from "prop-types";
import css from './Statistics.module.css'

export default function Statistics ({props, total, percentage}) {  
    const options = Object.keys(props);

return ( 
<>
{total() < 1 ?       
            <p className={css.descr}>
                No feedback given
            </p>
            :
            <>
            {options.map(option => <li key={option} className={css.descr}>
                {option}: <span className={css.number}> {props[option]}</span>
            </li>)}
            <li key='total' className={css.descr}>Total: <span className={css.number}>{total()}</span></li>
            <li key='positive' className={css.descr}>Positive feedback: <span className={css.number}>{percentage()}%</span></li>     
            </>
        }
    </>
)     
}

Statistics.propTypes = {
    props: PropTypes.object,
    total: PropTypes.func,
    percentage: PropTypes.func,

}
