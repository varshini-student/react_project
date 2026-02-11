// function ProgressBar({percentage}){
//     return(
//         <div>
//             <h3>You are {percentage}% Placement Ready</h3>
//         </div>
//     );
// }
// export default ProgressBar;
function ProgressBar({ percentage }) {
    return (
        <div className="progress-container">
            <h3>You are {percentage}% Placement Ready</h3>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}

export default ProgressBar;
