import React from 'react'
import SummaryCard from './SummaryCard'
import Analysis from './Analysis'
import Overview from './Overview'
import RecentTransaction from './RecentTransaction';

// Since recentTransactions.js is two levels up and then into the Data folder:
import { recentTransactions } from '../../../Data/recentTransactions';

const Dashboard = () => {
    return (
        <div className=''>
            <SummaryCard />
            <Analysis />
            <Overview />
            <RecentTransaction data={recentTransactions} />
        </div>
    )
}

export default Dashboard