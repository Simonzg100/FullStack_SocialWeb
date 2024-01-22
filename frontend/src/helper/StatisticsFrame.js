import './StatisticsFrame.css'
const StatisticsFrame = ({ stats }) => {
    return (
        <div className="statistics-frame">
            <h3>Player Statistics</h3>
            <ul>
                <li>Points per game: {stats.pointsPerGame}</li>
                <li>Assists per game: {stats.assistsPerGame}</li>
                <li>Rebounds per game: {stats.reboundsPerGame}</li>
                <li>Steals per game: {stats.stealsPerGame}</li>
                {/*<li>College: {stats.college}</li>*/}
                <li>blocksPerGame: {stats.blocksPerGame}</li>
                <li>fieldGoalPercentage: {stats.fieldGoalPercentage}</li>
                <li>freeThrowPercentage:{stats.freeThrowPercentage}</li>
                <li>threePointPercentage: {stats.threePointPercentage}</li>
                <li>minutesPerGame: {stats.minutesPerGame}</li>

                {/* ... other stats */}
            </ul>
        </div>
    );
};

export default StatisticsFrame;
