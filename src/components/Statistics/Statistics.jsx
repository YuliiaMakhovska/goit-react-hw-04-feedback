import PropTypes from 'prop-types';
import {StatisticsList, StatisticsItem} from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (    <StatisticsList>
        <StatisticsItem>
            <span>Good : { good}</span>
        </StatisticsItem>
                <StatisticsItem>
            <span>Neutral : { neutral}</span>
        </StatisticsItem>
                <StatisticsItem>
            <span>Bad : { bad}</span>
        </StatisticsItem>
                <StatisticsItem>
            <span>Total : { total}</span>
        </StatisticsItem>
                <StatisticsItem>
            <span>PositivePercentage : { positivePercentage}%</span>
        </StatisticsItem>
    </StatisticsList>)

}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
export default Statistics;