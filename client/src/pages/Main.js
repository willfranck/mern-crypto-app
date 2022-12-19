import './Main.css'
import '../components/cryptoCardGrid.css'
import CryptoCardGrid from '../components/cryptoCardGrid'
import HeroCard from '../components/heroCard'
// import SideNav from '../components/sideNav'

function Main() {
  return (
    <main className='page-container flex'>
      {/* <SideNav /> */}
      <HeroCard />
      <CryptoCardGrid />
    </main>
  )
}

export default Main
