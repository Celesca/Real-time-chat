import './LoginPage.css'
import Login from '../../components/Login'

const LoginPage = () => {
  return (
    <>
    <div className="body-container">
      <h1 className="text-center pt-12 mb-16 text-black font-semibold text-3xl">Welcome to RC Chat (Real-time Chat Application) 🌎</h1>
      
        <Login/>
      <footer className="footer-container">
        <div className="text-center text-black text-lg text-center py-8">Made with ❤️ by 
          <a href="https://github.com/Celesca" className="text-yellow-300 hover:text-white">&nbsp;Celescadev</a> 
        </div>
      </footer>
    </div>
    </>
  )
}

export default LoginPage