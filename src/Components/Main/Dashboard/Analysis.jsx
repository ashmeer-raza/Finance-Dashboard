import BalanceTrend from './BalanceTrend'
import SpendingChart from './Spending'

const Analysis = () => {
    return (
        <div>
            <h3 className='w-full text-2xl font-bold text-gray-700 pt-10 mb-5 px-10 cursor-pointer'>Analysis</h3>
            <div className='flex flex-wrap justify-center gap-10'>
                <BalanceTrend className='w-full' />
                <SpendingChart className='' />
            </div>
        </div>
    )
}

export default Analysis