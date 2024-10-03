import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getscoreuser } from '../../../store/admin/adminslice';
import Chart from 'chart.js/auto';

const UsersScores = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getscoreuser());
    }, []);

    const { userScores } = useSelector((state) => state.adminSlice);
    const userNames = userScores?.userNames;
    const userScoresValues = userScores?.userScoresValues;

    useEffect(() => {
        // Initialize the chart once userScores data is available
        if (userNames && userScoresValues) {
            const ctx = document.getElementById('userScoresChart').getContext('2d');

            // Destroy the previous chart instance if it exists
            const existingChart = Chart.getChart(ctx);
            if (existingChart) {
                existingChart.destroy();
            }

            const newChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: userNames,
                    datasets: [{
                        label: 'Scores',
                        data: userScoresValues,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return () => {
                // Cleanup: Destroy the chart when the component is unmounted
                newChart.destroy();
            };
        }
    }, [userNames, userScoresValues]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">User Scores</h2>

            {/* Chart Container */}
            <div>
                <canvas id="userScoresChart" width="400" height="200"></canvas>
            </div>

            <ul className="list-disc ml-6 mt-4">
                {userScores?.userScores?.length > 0 ? (
                    userScores.userScores.map((userScore, index) => (
                        <li key={userScore.id} className="mb-4">
                            <span className="font-semibold text-blue-600">{userNames[index]}:</span>
                            <span className="ml-2 text-green-600">Score: {userScoresValues[index]}</span>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No scores available.</li>
                )}
            </ul>
        </div>
    );
};

export default UsersScores;
